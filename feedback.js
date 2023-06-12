import { combineRgb } from '@companion-module/base'

export function getFeedbackDefinitions (self) {
    return {
        'disc': {
            name: 'Disc Status',
            type: 'boolean',
            defaultStyle: {
                bgcolor: combineRgb(0, 0, 0),
                color: combineRgb(255, 255, 255),
            },
            options: [
                {
                    type: 'dropdown',
                    label: 'Disc Status',
                    id: 'disc',
                    required: true,
                    choices: [
                        { id: 'NC', label: 'There is no disc media' },
                        { id: 'CI', label: 'There is disc media' },
                        { id: 'UF', label: 'Mounted media is unformatted' },
                        { id: 'TO', label: 'Disc tray is opening or open' },
                        { id: 'TC', label: 'Disc tray is closing or closed' },
                        { id: 'TE', label: 'Disc tray error' }
                    ],
                    default: 'NC'
                },
                {
                    type: 'checkbox',
                    label: 'Negate Status',
                    id: 'negatestatus',
                    default: false
                }
            ],
            callback: feedback => (
                feedback.options.negatestatus
                    ? self.disc !== feedback.options.disc
                    : self.disc === feedback.options.disc
            )
        },
        'playback': {
            name: 'Playback Status',
            type: 'boolean',
            defaultStyle: {
                bgcolor: combineRgb(0, 0, 0),
                color: combineRgb(255, 255, 255),
            },
            options: [
                {
                    type: 'dropdown',
                    label: 'Playback Status',
                    id: 'playback',
                    required: true,
                    choices: [
                        { id: 'PL', label: 'Play' },
                        { id: 'PP', label: 'Pause' },
                        { id: 'DVSR', label: 'Slow play reverse' },
                        { id: 'DVSF', label: 'Slow play forward' },
                        { id: 'DVFR', label: 'Search play reverse' },
                        { id: 'DVFF', label: 'Search play forward' },
                        { id: 'DVSP', label: 'Step play' },
                        { id: 'DVFS', label: 'FS play' },
                        { id: 'ED', label: 'Menu setting is displayed' },
                        { id: 'DVSU', label: 'Setup mode' },
                        { id: 'DVTR', label: 'Track/Root menu' },
                        { id: 'DVHM', label: 'Home menu' }
                    ],
                    default: 'PL'
                },
                {
                    type: 'checkbox',
                    label: 'Negate Status',
                    id: 'negatestatus',
                    default: false
                }
            ],
            callback: feedback => (
                feedback.options.negatestatus
                    ? self.playback !== feedback.options.playback
                    : self.playback === feedback.options.playback
            )
        }
    }
}
