import { Key } from './Key.js';

export class KeyboardRow {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
        this.keyboardRow = null;
    }

    init() {
        this.keyboardRow = document.createElement('div');
        this.keyboardRow.classList = 'keyboard__row';
        this.parent.append(this.keyboardRow);
    }

    createKeys() {
        this.data.forEach(el => {
            const key = new Key(el.value, el.status, this.keyboardRow);
            key.init();
        })
    }
}