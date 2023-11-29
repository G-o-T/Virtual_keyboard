import { engKeyLayouts } from '../data.js';
import { KeyboardRow } from './KeyboardRow.js';

export class Keyboard {
    constructor(parent) {
        this.parent = parent;
        this.keyboard = null;
    }

    init() {
        this.keyboard = document.createElement('div');
        this.keyboard.classList = 'keyboard';
        this.parent.append(this.keyboard);
    }

    createKeyboardRows() {
        for (let i = 0; i < engKeyLayouts.length; i++) {
            const keyboardRow = new KeyboardRow(this.keyboard, engKeyLayouts[i]);
            keyboardRow.init();
            keyboardRow.createKeys();
        }
    }
}