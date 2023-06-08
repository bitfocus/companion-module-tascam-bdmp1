import { combineRgb } from '@companion-module/base'

export function getPresetDefinitions (self) {
    return {
        'play': {
            type: 'button',
            category: 'Playback',
            name: 'Play',
            style: {
                text: '⏵',
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
                text: '⏹',
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
                text: '⏸',
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
                text: '⏮',
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
                text: '⏭',
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
                text: '⏪',
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
                text: '⏩',
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
    }
}