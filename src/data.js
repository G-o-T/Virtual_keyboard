// export const engKeyLayout1 = [
//     "1", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//     "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//     "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//     "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//     "space"
// ],


const engKeyLayout1 = [
    {
        value: '`',
        extraValue: '~',
        status: 'x',
    },
    {
        value: '1',
        extraValue: '!',
        status: '',
    },
    {
        value: '2',
        extraValue: '@',
        status: '',
    },
    {
        value: '3',
        extraValue: '#',
        status: '',
    },
    {
        value: '4',
        extraValue: '$',
        status: '',
    },
    {
        value: '5',
        extraValue: '%',
        status: '',
    },
    {
        value: '6',
        extraValue: '^',
        status: '',
    },
    {
        value: '7',
        extraValue: '&',
        status: '',
    },
    {
        value: '8',
        extraValue: '*',
        status: '',
    },
    {
        value: '9',
        extraValue: '(',
        status: '',
    },
    {
        value: '0',
        extraValue: ')',
        status: '',
    },
    {
        value: '-',
        extraValue: '_',
        status: '',
    },
    {
        value: '=',
        extraValue: '+',
        status: '',
    },
    {
        value: 'backspace',
        status: 'double',
    },
];

const engKeyLayout2 = [
    {
        value: 'tab',
        status: 'oah',
    },
    {
        value: 'q',
        status: '',
    },
    {
        value: 'w',
        status: '',
    },
    {
        value: 'e',
        status: '',
    },
    {
        value: 'r',
        status: '',
    },
    {
        value: 't',
        status: '',
    },
    {
        value: 'y',
        status: '',
    },
    {
        value: 'u',
        status: '',
    },
    {
        value: 'i',
        status: '',
    },
    {
        value: 'o',
        status: '',
    },
    {
        value: 'p',
        status: '',
    },
    {
        value: '[',
        extraValue: '{',
        status: '',
    },
    {
        value: ']',
        extraValue: '}',
        status: '',
    },
    {
        value: '\\',
        extraValue: '|',
        status: '',
    },
    {
        value: 'del',
        status: 'cmd',
    },
];

const engKeyLayout3 = [
    {
        value: 'caps lock',
        status: 'caps lock',
    },
    {
        value: 'a',
        status: '',
    },
    {
        value: 's',
        status: '',
    },
    {
        value: 'd',
        status: '',
    },
    {
        value: 'f',
        status: '',
    },
    {
        value: 'g',
        status: '',
    },
    {
        value: 'h',
        status: '',
    },
    {
        value: 'j',
        status: '',
    },
    {
        value: 'k',
        status: '',
    },
    {
        value: 'l',
        status: '',
    },
    {
        value: ';',
        extraValue: ':',
        status: '',
    },
    {
        value: '\'',
        extraValue: '"',
        status: '',
    },
    {
        value: 'enter',
        status: 'double',
    },
];

const engKeyLayout4 = [
    {
        value: 'shift',
        status: 'double',
    },
    {
        value: 'z',
        status: '',
    },
    {
        value: 'x',
        status: '',
    },
    {
        value: 'c',
        status: '',
    },
    {
        value: 'v',
        status: '',
    },
    {
        value: 'b',
        status: '',
    },
    {
        value: 'n',
        status: '',
    },
    {
        value: 'm',
        status: '',
    },
    {
        value: ',',
        status: '',
    },
    {
        value: '.',
        status: '',
    },
    {
        value: '/',
        status: '',
    },
    {
        value: '',
        status: 'arrow-up',
    },
    {
        value: 'shift',
        status: 'cmd',
    },
];

const engKeyLayout5 = [
    {
        value: 'ctrl',
        status: 'cmd',
    },
    {
        value: 'fn',
        status: 'cmd',
    },
    {
        value: 'win',
        status: 'cmd',
    },
    {
        value: 'alt',
        status: 'cmd',
    },
    {
        value: 'space',
        status: 'space',
    },
    {
        value: 'alt',
        status: 'cmd',
    },
    {
        value: 'ctrl',
        status: 'cmd',
    },
    {
        value: '',
        status: 'arrow-left',
    },
    {
        value: '',
        status: 'arrow-down',
    },
    {
        value: '',
        status: 'arrow-right',
    },

]

export const engKeyLayouts = [engKeyLayout1, engKeyLayout2, engKeyLayout3, engKeyLayout4, engKeyLayout5];