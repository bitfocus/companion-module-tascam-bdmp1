import { Regex } from '@companion-module/base'

export const ConfigFields = [
    {
        type: 'textinput',
        id: 'address',
        label: 'Device Address',
        width: 8,
        regex: Regex.IP,
        tooltip: 'IP Address of the Blu-Ray Player.'
    },
    {
        type: 'dropdown',
        id: 'placeholder',
        label: 'Variable Placeholder',
        width: 4,
        choices: [
            { id: '-', label: 'Dash (-)' },
            { id: '0', label: 'Zero (0)' }
        ],
        default: '-',
        tooltip: 'Character that will be used to fill a variable which is unset.'
    }
]
