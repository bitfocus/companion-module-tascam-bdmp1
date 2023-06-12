export function getActionDefinitions (self) {
    return {
        'stop': {
            name: 'Stop',
            options: [],
            callback: () => {
                self.sendCommand('STP')
            }
        },
        'play': {
            name: 'Play',
            options: [],
            callback: () => {
                self.sendCommand('PLY')
            }
        },
        'pause': {
            name: 'Pause',
            options: [],
            callback: () => {
                self.sendCommand('PAS')
            }
        },
        'chapter_jump': {
            name: 'Chapter Jump',
            options: [
                {
                    type: 'number',
                    label: 'Chapter',
                    tooltip: 'DVD/BD Chapter, File No (0001-2000)',
                    id: 'chapter',
                    required: true,
                    min: 1,
                    max: 2000,
                    default: 1
                }
            ],
            callback: action => {
                self.sendCommand('SKP' + Number(action.options.chapter).toFixed().padStart(4, '0'))
            }
        },
        'chapter_jump_next': {
            name: 'Track/Chapter Jump Next',
            options: [],
            callback: () => {
                self.sendCommand('SKPNX')
            }
        },
        'chapter_jump_prev': {
            name: 'Track/Chapter Jump Prev',
            options: [],
            callback: () => {
                self.sendCommand('SKPPV')
            }
        },
        'title_jump': {
            name: 'Title Jump',
            options: [
                {
                    type: 'number',
                    label: 'Title',
                    tooltip: 'DVD/BD Title/CD Track No (0001-2000)',
                    id: 'title',
                    required: true,
                    min: 1,
                    max: 2000,
                    default: 1
                }
            ],
            callback: action => {
                self.sendCommand('GSK' + Number(action.options.title).toFixed().padStart(4, '0'))
            }
        },
        'title_jump_next': {
            name: 'Title Jump Next',
            options: [],
            callback: () => {
                self.sendCommand('GSKNX')
            }
        },
        'title_jump_prev': {
            name: 'Title Jump Prev',
            options: [],
            callback: () => {
                self.sendCommand('GSKPV')
            }
        },
        'time_mode_code': {
            name: 'Time Mode Code',
            options: [
                {
                    type: 'dropdown',
                    label: 'Time Mode',
                    tooltip: 'Time Mode',
                    id: 'code',
                    required: true,
                    choices: [
                        { id: 'TL', label: 'Total Elapsed' },
                        { id: 'TR', label: 'Total Remain' },
                        { id: 'EL', label: 'Elapsed' },
                        { id: 'RM', label: 'Remain' }
                    ],
                    default: 'TL'
                }
            ],
            callback: action => {
                self.sendCommand('TMD' + action.options.code)
            }
        },
        'hide_menu': {
            name: 'Hide Menu',
            options: [
                {
                    type: 'dropdown',
                    label: 'On/Off',
                    tooltip: 'Complete hiding of the menu/icon displayed on the screen.',
                    id: 'hide',
                    required: true,
                    choices: [
                        { id: '00', label: 'OSD on' },
                        { id: '01', label: 'OSD off' }
                    ],
                    default: '00'
                }
            ],
            callback: action => {
                self.sendCommand('OSD' + action.options.hide)
            }
        },
        'setup_menu': {
            name: 'Setup Menu',
            options: [],
            callback: () => {
                self.sendCommand('SMN')
            }
        },
        'top_menu': {
            name: 'Top Menu (Disc Menu)',
            options: [],
            callback: () => {
                self.sendCommand('TMN')
            }
        },
        'option_menu': {
            name: 'Option Menu',
            options: [],
            callback: () => {
                self.sendCommand('OMN')
            }
        },
        'pop_up_menu': {
            name: 'Pop Up Menu',
            options: [],
            callback: () => {
                self.sendCommand('PMN')
            }
        },
        'return': {
            name: 'Return',
            options: [],
            callback: () => {
                self.sendCommand('RET')
            }
        },
        'audio_dialog': {
            name: 'Audio Dialog',
            options: [
                {
                    type: 'dropdown',
                    label: 'Audio stream code',
                    tooltip: 'Selects dialog in the BD/DVD disc.',
                    id: 'code',
                    required: true,
                    choices: [
                        { id: '+', label: 'Primary'   },
                        { id: '-', label: 'Secondary' }
                    ],
                    default: '+'
                }
            ],
            callback: action => {
                self.sendCommand('ADG' + action.options.code)
            }
        },
        'subtitle': {
            name: 'Subtitle',
            options: [],
            callback: () => {
                self.sendCommand('SBT1')
            }
        },
        'enter': {
            name: 'Enter',
            options: [],
            callback: () => {
                self.sendCommand('ENT')
            }
        },
        'disc_tray': {
            name: 'Disc Tray',
            options: [
                {
                    type: 'dropdown',
                    label: 'Disc Tray Open/Close',
                    tooltip: 'Controls Disc Tray',
                    id: 'tray',
                    required: true,
                    choices: [
                        { id: 'OP', label: 'Open'  },
                        { id: 'CL', label: 'Close' }
                    ],
                    default: 'OP'
                }
            ],
            callback: action => {
                self.sendCommand('OPC' + action.options.tray)
            }
        },
        'video_resolution': {
            name: 'Video Resolution',
            options: [
                {
                    type: 'dropdown',
                    label: 'Resolution',
                    tooltip: 'Changes the resolution of HDMI',
                    id: 'resolution',
                    required: true,
                    choices: [
                        { id: '1', label: 'Auto' },
                        { id: '2', label: '480/576i' },
                        { id: '3', label: '480/576p' },
                        { id: '4', label: '720p' },
                        { id: '5', label: '1080i' },
                        { id: '6', label: '1080p' }
                    ],
                    default: '1'
                }
            ],
            callback: action => {
                self.sendCommand('RSC' + action.options.resolution)
            }
        },
        'display_info': {
            name: 'Display/Info',
            options: [],
            callback: () => {
                self.sendCommand('DSP')
            }
        },
        'function_color': {
            name: 'Function/Color',
            options: [
                {
                    type: 'dropdown',
                    label: 'Color',
                    tooltip: 'Carries out a function peculiar to a disc.',
                    id: 'color',
                    required: true,
                    choices: [
                        { id: '1', label: 'Red' },
                        { id: '2', label: 'Green' },
                        { id: '3', label: 'Blue' },
                        { id: '4', label: 'Yellow' }
                    ],
                    default: '1'
                }
            ],
            callback: action => {
                self.sendCommand('CBC' + action.options.color)
            }
        },
        'home': {
            name: 'Home',
            options: [],
            callback: () => {
                self.sendCommand('HOM')
            }
        },
        'ten_key': {
            name: 'Ten Key',
            options: [
                {
                    type: 'number',
                    label: 'Number',
                    tooltip: 'Inputs 0-9',
                    id: 'number',
                    required: true,
                    min: 0,
                    max: 9,
                    default: 0
                }
            ],
            callback: action => {
                self.sendCommand('NUM' + action.options.number)
            }
        },
        'slow_search': {
            name: 'Slow/Search',
            options: [
                {
                    type: 'dropdown',
                    label: 'Direction',
                    id: 'direction',
                    required: true,
                    choices: [
                        { id: 'F', label: 'Forward' },
                        { id: 'R', label: 'Reverse' }
                    ],
                    default: 'F'
                },
                {
                    type: 'dropdown',
                    label: 'Search Speed',
                    id: 'speed',
                    required: true,
                    choices: [
                        { id: 'f', label: 'Fast (cyclic 1,2,3,4,5)' },
                        { id: 's', label: 'Slow (cyclic 1/16,1/8,1/4,1/2,1)' }
                    ],
                    default: 'f'
                }
            ],
            callback: action => {
                self.sendCommand('SCN' + action.options.direction + action.options.speed)
            }
        },
        'mute': {
            name: 'Mute',
            options: [
                {
                    type: 'dropdown',
                    label: 'On/Off',
                    id: 'mute',
                    required: true,
                    choices: [
                        { id: '00', label: 'Mute on' },
                        { id: '01', label: 'Mute off' }
                    ],
                    default: '00'
                }
            ],
            callback: action => {
                self.sendCommand('MUT' + action.options.mute)
            }
        },
        'cursor': {
            name: 'Cursor',
            options: [
                {
                    type: 'dropdown',
                    label: 'Direction',
                    tooltip: 'Direction of cursor movement',
                    id: 'direction',
                    required: true,
                    choices: [
                        { id: '1', label: 'Left' },
                        { id: '2', label: 'Right' },
                        { id: '3', label: 'Up' },
                        { id: '4', label: 'Down' }
                    ],
                    default: '1'
                }
            ],
            callback: action => {
                self.sendCommand('OSD' + action.options.direction)
            }
        },
        'auto_play': {
            name: 'Auto Play',
            options: [
                {
                    type: 'dropdown',
                    label: 'Auto Play',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '00', label: 'On (repeat off)' },
                        { id: '01', label: 'Off' }
                    ],
                    default: '00'
                }
            ],
            callback: action => {
                self.sendCommand('APL' + action.options.suffix)
            }
        },
        'pip_mark': {
            name: 'PIP Mark',
            options: [
                {
                    type: 'dropdown',
                    label: 'PIP Mark',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '00', label: 'On' },
                        { id: '01', label: 'Off' }
                    ],
                    default: '00'
                }
            ],
            callback: action => {
                self.sendCommand('PMK' + action.options.suffix)
            }
        },
        '3d_output': {
            name: '3D Output',
            options: [
                {
                    type: 'dropdown',
                    label: '3D Output',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: 'AT', label: 'Auto' },
                        { id: '01', label: 'Off' }
                    ],
                    default: 'AT'
                }
            ],
            callback: action => {
                self.sendCommand('3DO' + action.options.suffix)
            }
        },
        'aspect_ratio': {
            name: 'TV Aspect Ratio',
            options: [
                {
                    type: 'dropdown',
                    label: 'TV Aspect Ratio',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '9W', label: '16:9 Wide' },
                        { id: '9A', label: '16:9 Wide/Auto' },
                        { id: '3P', label: '4:3 pan & scan' },
                        { id: '3L', label: '4:3 letterbox'  }
                    ],
                    default: '9W'
                }
            ],
            callback: action => {
                self.sendCommand('ASC' + action.options.suffix)
            }
        },
        'tv_system': {
            name: 'TV System',
            options: [
                {
                    type: 'dropdown',
                    label: 'TV System',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: 'NT', label: 'NTSC' },
                        { id: 'PL', label: 'PAL' },
                        { id: 'MS', label: 'Multi-system' }
                    ],
                    default: 'NT'
                }
            ],
            callback: action => {
                self.sendCommand('TVS' + action.options.suffix)
            }
        },
        '24_conversion': {
            name: '1080p 24 Conversion',
            options: [
                {
                    type: 'dropdown',
                    label: '1080p 24 Conversion',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '00', label: 'On' },
                        { id: '01', label: 'Off' }
                    ],
                    default: '00'
                }
            ],
            callback: action => {
                self.sendCommand('R1K' + action.options.suffix)
            }
        },
        'color_space': {
            name: 'HDMI Color Space',
            options: [
                {
                    type: 'dropdown',
                    label: 'HDMI Color Space',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: 'RV', label: 'RGB Video Level' },
                        { id: 'RP', label: 'RGB PC Level' },
                        { id: 'Y4', label: 'YCbCr 4:4:4' },
                        { id: 'Y2', label: 'YCbCr 4:2:2' }
                    ],
                    default: 'RV'
                }
            ],
            callback: action => {
                self.sendCommand('CLS' + action.options.suffix)
            }
        },
        'deep_color': {
            name: 'HDMI Deep Color',
            options: [
                {
                    type: 'dropdown',
                    label: 'HDMI Deep Color',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '48', label: '48 Bits' },
                        { id: '36', label: '36 Bits' },
                        { id: '30', label: '30 Bits' },
                        { id: 'OF', label: 'Off' }
                    ],
                    default: '48'
                }
            ],
            callback: action => {
                self.sendCommand('DPC' + action.options.suffix)
            }
        },
        'secondary_audio': {
            name: 'Secondary Audio',
            options: [
                {
                    type: 'dropdown',
                    label: 'Secondary Audio',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '00', label: 'On' },
                        { id: '01', label: 'Off' }
                    ],
                    default: '00'
                }
            ],
            callback: action => {
                self.sendCommand('SCA' + action.options.suffix)
            }
        },
        'fs_setting': {
            name: 'Fs Setting',
            options: [
                {
                    type: 'dropdown',
                    label: 'Fs Setting',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '48', label: '48k LPCM' },
                        { id: '96', label: '96k LPCM' },
                        { id: '19', label: '192k LPCM' }
                    ],
                    default: '48'
                }
            ],
            callback: action => {
                self.sendCommand('COO' + action.options.suffix)
            }
        },
        'speaker_config': {
            name: 'Speaker Configuration',
            options: [
                {
                    type: 'dropdown',
                    label: 'Speaker/Woofer Number',
                    tooltip: 'Woofer Number is fixed to 1.',
                    id: 'configuration',
                    required: true,
                    choices: [
                        { id: '21', label: '2.1Ch' },
                        { id: '31', label: '3.1Ch' },
                        { id: '41', label: '4.1Ch' },
                        { id: '51', label: '5.1Ch' },
                        { id: '61', label: '6.1Ch' },
                        { id: '71', label: '7.1Ch' }
                    ],
                    default: '21'
                }
            ],
            callback: action => {
                self.sendCommand('SPC' + action.options.configuration)
            }
        },
        'speaker_setting': {
            name: 'SC Speaker Setting',
            options: [
                {
                    type: 'dropdown',
                    label: 'Type',
                    id: 'type',
                    required: true,
                    choices: [
                        { id: 'C', label: 'Center' },
                        { id: 'L', label: 'Left' },
                        { id: 'R', label: 'Right' },
                        { id: 'l', label: 'Left Surround' },
                        { id: 'r', label: 'Right Surround' }
                    ],
                    default: 'C'
                },
                {
                    type: 'dropdown',
                    label: 'Size',
                    id: 'size',
                    required: true,
                    choices: [
                        { id: '0', label: 'Large' },
                        { id: '1', label: 'Small' }
                    ],
                    default: '0'
                },
                {
                    type: 'textinput',
                    label: 'Level',
                    tooltip: 'Example: -01 = -1dB, +10 = +10dB',
                    id: 'level',
                    required: true,
                    regex: self.REGEX_LEVEL_DB
                },
                {
                    type: 'number',
                    label: 'Delay',
                    tooltip: 'Milliseconds',
                    id: 'delay',
                    required: true,
                    min: 0,
                    max: 9999,
                    default: 0
                }
            ],
            callback: action => {
                self.sendCommand('SPS'
                    + action.options.type 
                    + action.options.size
                    + Number(action.options.level).toFixed().replace(/^([+-]?)([0-9]{1,2})$/, (g, s, n) => ((s ? s : '+') + n.padStart(2, '0')))
                    + Number(action.options.delay).toFixed().padStart(4, '0'))
            }
        },
        'firmware_upgrade': {
            name: 'Firmware Upgrade',
            options: [
                {
                    type: 'dropdown',
                    label: 'Firmware Upgrade',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: 'US', label: 'Via USB' },
                        { id: 'DS', label: 'Via Disc' }
                    ],
                    default: 'US'
                }
            ],
            callback: action => {
                self.sendCommand('FWU' + action.options.suffix)
            }
        },
        'hdmi_cec': {
            name: 'HDMI CEC',
            options: [
                {
                    type: 'dropdown',
                    label: 'HDMI CEC',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: 'H1', label: 'HDMI1' },
                        { id: 'OF', label: 'Off' }
                    ],
                    default: 'H1'
                }
            ],
            callback: action => {
                self.sendCommand('CCR' + action.options.suffix)
            }
        },
        'factory_reset': {
            name: 'Reset Factory Defaults',
            options: [],
            callback: () => {
                self.sendCommand('INI')
            }
        },
        'bd_live': {
            name: 'BD-Live Network Access',
            options: [
                {
                    type: 'dropdown',
                    label: 'BD-Live Network Access',
                    id: 'suffix',
                    required: true,
                    choices: [
                        { id: '00', label: 'On' },
                        { id: 'LT', label: 'Limited' },
                        { id: '01', label: 'Off' }
                    ],
                    default: '00'
                }
            ],
            callback: action => {
                self.sendCommand('LNA' + action.options.suffix)
            }
        }
    }
}
