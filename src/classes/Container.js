import { Textarea } from "./Textarea.js";
import { Keyboard } from "./Keyboard.js";
// import { Lang } from "./Lang.js";

export class Container {
    constructor(body) {
        this.body = body;
        this.container = null;
        this.textarea = null;
        this.keyboard = null;
    }

    init() {
        this.container = document.createElement('div');
        this.container.className = 'container';
        this.body.prepend(this.container);
    }

    createChildren() {
        const currentLang = 'eng';
        this.textarea = new Textarea(this.container, currentLang);
        this.keyboard = new Keyboard(this.container);

        this.textarea.init();
        this.keyboard.init();
        this.keyboard.createKeyboardRows();



    }
}