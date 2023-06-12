import { combineRgb } from '@companion-module/base'

export function getPresetDefinitions (self) {
    return {
        'play': {
            type: 'button',
            category: 'Playback',
            name: 'Play',
            style: {
                text: '\u23f5',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'play'
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'stop': {
            type: 'button',
            category: 'Playback',
            name: 'Stop',
            style: {
                text: '\u23f9',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'stop'
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'pause': {
            type: 'button',
            category: 'Playback',
            name: 'Pause',
            style: {
                text: '\u23f8',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'pause'
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'prev': {
            type: 'button',
            category: 'Playback',
            name: 'Previous',
            style: {
                text: '\u23ee',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'title_jump_prev'
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'next': {
            type: 'button',
            category: 'Playback',
            name: 'Next',
            style: {
                text: '\u23ed',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'title_jump_next'
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'reverse': {
            type: 'button',
            category: 'Playback',
            name: 'Reverse',
            style: {
                text: '\u23ea',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'slow_search',
                        options: {
                            direction: 'R',
                            speed: 'f'
                        }
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'forward': {
            type: 'button',
            category: 'Playback',
            name: 'Forward',
            style: {
                text: '\u23e9',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'slow_search',
                        options: {
                            direction: 'F',
                            speed: 'f'
                        }
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'enter': {
            type: 'button',
            category: 'Menu',
            name: 'Enter',
            style: {
                text: 'ENTER',
                size: '18',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'enter'
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'cursor_left': {
            type: 'button',
            category: 'Menu',
            name: 'Left',
            style: {
                text: '\u2b05',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'cursor',
                        options: {
                            direction: '1'
                        }
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'cursor_right': {
            type: 'button',
            category: 'Menu',
            name: 'Right',
            style: {
                text: '\u27a1',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'cursor',
                        options: {
                            direction: '2'
                        }
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'cursor_up': {
            type: 'button',
            category: 'Menu',
            name: 'Up',
            style: {
                text: '\u2b06',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'cursor',
                        options: {
                            direction: '3'
                        }
                    }],
                    up: [],
            }],
            feedbacks: []
        },
        'cursor_down': {
            type: 'button',
            category: 'Menu',
            name: 'Down',
            style: {
                text: '\u2b07',
                size: 'auto',
                color: combineRgb(255, 255, 255),
                bgcolor: combineRgb(0, 0, 0)
            },
            steps: [{
                    down: [{
                        actionId: 'cursor',
                        options: {
                            direction: '4'
                        }
                    }],
                    up: [],
            }],
            feedbacks: []
        }
    }
}