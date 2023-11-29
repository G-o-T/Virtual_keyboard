export class Textarea {
    constructor(parent, lang) {
        this.parent = parent;
        this.textarea = null;
        this.lang = lang;
    }

    init() {
        this.textarea = document.createElement('textarea');
        this.textarea.classList = 'textarea';
        this.textarea.placeholder = (this.lang === 'eng') ? 'Virtual keyboard text' : 'Тэкст віртуальнай клавіятуры';
        this.parent.append(this.textarea);
    }
}