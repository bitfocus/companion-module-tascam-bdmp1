const InstanceSkel        = require('../../instance_skel')
const TcpSocket           = require('../../tcp')
const InstanceActions     = require('./action')
const FeedbackDefinitions = require('./feedback')

class Instance extends InstanceActions(FeedbackDefinitions(InstanceSkel)) {

	constructor (...args) {
		super(...args)

		this.socket   = null
		this.timer    = null
		this.requests = ['MST', 'SST', 'STT', 'STC', 'STG', 'SGN', 'SET', 'SRT']
		this.current  = -1
		this.disc     = ''
		this.playback = ''
	
		this.actions()
		this.feedbacks()
	}

	init () {
		this.initSocket()
		this.initVariables()
	}

	initSocket () {
		this.destroySocket()

		if (this.config.address) {
			const socket = new TcpSocket(this.config.address, 9030)

			socket.on('status_change', (status, message) => {
				this.status(status, message)
			}).on('error', err => {
				this.log('error', err.message)
			}).on('connect', () => {
				this.socket = socket
				this.nextRequest()
			}).on('end', () => {
				this.socket = null
				this.stopRequest()
			}).on('data', this.onDataReceived.bind(this))
		}
	}

	initVariables () {
		this.setVariableDefinitions([
			{ name: 'track:total',   label: 'Total Track'        },
			{ name: 'track:number',  label: 'Track Number'       },
			{ name: 'group:total',   label: 'Total Group/Title'  },
			{ name: 'group:number',  label: 'Group/Title Number' },
			{ name: 'elapse:hour',   label: 'Elapse Hour'        },
			{ name: 'elapse:minute', label: 'Elapse Minute'      },
			{ name: 'elapse:second', label: 'Elapse Second'      },
			{ name: 'remain:hour',   label: 'Remain Hour'        },
			{ name: 'remain:minute', label: 'Remain Minute'      },
			{ name: 'remain:second', label: 'Remain Second'      }
		]);
	}

	destroy () {
		this.destroySocket()
	}

	destroySocket () {
		const socket = this.socket

		if (socket) {
			this.socket = null

			socket.options.reconnect = false
			socket.socket.end()
			socket.destroy()
		}
	}

	config_fields () {
		return [
			{
				type:    'textinput',
				id:      'address',
				label:   'Device Address',
				width:   12,
				regex:   this.REGEX_IP,
				tooltip: 'IP Address of the Blu-Ray Player.'
			}
		]
	}

	updateConfig (config) {
		this.config = config
		this.init()
	}

	action (action) {
		this.sendCommand(this.commands[action.action](action.options))
	}

	feedback (feedback) {
		const options = feedback.options
		const style   = { color: options.foreground, bgcolor: options.background }

		switch (feedback.type) {
			case 'disc':
				return this.disc === options.disc ? style : {}
			case 'playback':
				return this.playback === options.playback ? style : {}
			default:
				return {}
		}
	}

	sendCommand (command) {
		if (this.socket) {
			this.socket.write(Buffer.from('!7' + command + '\r', 'latin1'))
		}
	}

	onDataReceived (data) {
		const [, command, response] = data.toString('latin1').match(/^ack\+!7([A-Z]{3})(.+)$/) || []

		switch (command) {
			case 'MST':
				this.disc = response
				this.checkFeedbacks('disc')
				break
			case 'SST':
				this.playback = response
				this.checkFeedbacks('playback')
				break
			case 'TTN':
				this.setNumber(response, 'track:total')
				break
			case 'TNM':
				this.setNumber(response, 'track:number')
				break
			case 'TGN':
				this.setNumber(response, 'group:total')
				break
			case 'GNM':
				this.setNumber(response, 'group:number')
				break
			case 'SET':
				this.setTime(response, 'elapse')
				break
			case 'SRT':
				this.setTime(response, 'remain')
				break
		}
	}

	nextRequest () {
		this.timer = setTimeout(() => {
			if (++this.current >= this.requests.length) {
				this.current = 0
			}

			this.sendCommand('?' + this.requests[this.current])
			this.nextRequest()
		}, Math.trunc(1000 / this.requests.length))
	}

	stopRequest () {
		const timer = this.timer

		if (timer) {
			this.timer = null

			clearTimeout(timer)
		}
	}

	setTime (time, base) {
		const [, h, m, s] = time.match(/^([0-9]{3})([0-9]{2})([0-9]{2})$/) || []

		this.setVariable(base + ':hour',   (Number(h) || 0).toFixed().padStart(2, '0'))
		this.setVariable(base + ':minute', (Number(m) || 0).toFixed().padStart(2, '0'))
		this.setVariable(base + ':second', (Number(s) || 0).toFixed().padStart(2, '0'))
	}

	setNumber (number, name) {
		this.setVariable(name, (Number(number) || 0).toFixed().padStart(2, '0'))
	}
}

exports = module.exports = Instance