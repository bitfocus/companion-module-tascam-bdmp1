import { InstanceBase, runEntrypoint, InstanceStatus, TCPHelper, Regex } from '@companion-module/base'
import { UpgradeScripts } from './upgrade.js'
import { ConfigFields } from './config.js'
import { getActionDefinitions } from './action.js'
import { getFeedbackDefinitions } from './feedback.js'
import { getVariableDefinitions } from './variable.js'
import { getPresetDefinitions } from './preset.js'

class BDMP1Instance extends InstanceBase {

    constructor (internal) {
        super(internal)

        this.REGEX_LEVEL_DB = '/^[+-]?[0-9]{1,2}$/'

        this.socket = null
        this.timer = null
        this.requests = [ 'MST', 'SST', 'STT', 'STC', 'STG', 'SGN', 'SET', 'SRT' ]
    }

    init (config) {
        this.config = config
        this.current = -1
        this.disc = ''
        this.playback = ''

        this.updateStatus(InstanceStatus.UnknownWarning, 'Initializing')

        this.setActionDefinitions(getActionDefinitions(this))
        this.setFeedbackDefinitions(getFeedbackDefinitions(this))
        this.setVariableDefinitions(getVariableDefinitions(this))
        this.setPresetDefinitions(getPresetDefinitions(this))

        this.resetVariables()
        this.openSocket()
    }

    configUpdated (config) {
        this.config = config

        this.init(config)
    }

    destroy () {
        this.closeSocket()
    }

    getConfigFields () {
        return ConfigFields
    }

    resetVariables () {
        ;[ 'track_total', 'track_number', 'group_total', 'group_number' ].forEach(id => {
            this.setNumber(id)
        })

        ;[ 'elapse', 'remain' ].forEach(base => {
            this.setTime(base)
        })
    }

    openSocket () {
        this.closeSocket()

        if (this.config.address) {
            this.updateStatus(InstanceStatus.Connecting)

            const socket = new TCPHelper(this.config.address, 9030)

            socket.on('status_change', status => {
                if (InstanceStatus.UnknownError !== status) {
                    this.updateStatus(status)
                }
            }).on('error', err => {
                this.updateStatus(InstanceStatus.ConnectionFailure)
                this.log('error', err.message)
            }).on('connect', () => {
                this.socket = socket
                
                this.nextRequest()
            }).on('end', () => {
                this.socket = null

                this.stopRequest()
            }).on('data', this.onDataReceived.bind(this))

            this.destroySocket = () => {
                socket.destroy()
                socket.removeAllListeners()

                delete this.destroySocket
            }
        } else {
            this.updateStatus(InstanceStatus.BadConfig)
        }
    }

    closeSocket () {
        const socket = this.socket

        if (socket) {
            this.socket = null

            socket.options.reconnect = false
            socket.socket.end()
        }

        if ('destroySocket' in this) {
            this.destroySocket()
        }
    }

    sendCommand (command) {
        if (this.socket) {
            this.socket.send(Buffer.from('!7' + command + '\r', 'latin1'))
        }
    }

    onDataReceived (data) {
        (data.toString('latin1').match(/ack\+!7[A-Z,0-9]+/g) || []).forEach(line => {
            const [ , command, response ] = line.match(/^.+7(.{3})(.+)$/) || []

            switch (command) {
                case 'MST':
                    this.disc = response
                    this.checkFeedbacks('disc')
                    break
                case 'SST':
                    this.playback = response
                    this.checkFeedbacks('playback')
    
                    if ([ 'DVHM', 'DVSU' ].includes(this.playback)) {
                        this.resetVariables()
                    }
                    break
                case 'TTN':
                    this.setNumber('track_total', response)
                    break
                case 'TNM':
                    this.setNumber('track_number', response)
                    break
                case 'TGN':
                    this.setNumber('group_total', response)
                    break
                case 'GNM':
                    this.setNumber('group_number', response)
                    break
                case 'SET':
                    this.setTime('elapse', response)
                    break
                case 'SRT':
                    this.setTime('remain', response)
                    break
            }	
        })
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

    setTime (base, time) {
        const [ , h, m, s ] = (time || '').match(/^([0-9]{3})([0-9]{2})([0-9]{2})$/) || []

        this.setNumber(base + '_hour',   h)
        this.setNumber(base + '_minute', m)
        this.setNumber(base + '_second', s)
    }

    setNumber (id, value) {
        this.setVariableValues({ [ id ] : (
            isNaN(value) ? (this.config.placeholder || '-').repeat(2)
                : Number(value).toFixed().padStart(2, '0')
        )})
    }
}

runEntrypoint(BDMP1Instance, UpgradeScripts)
