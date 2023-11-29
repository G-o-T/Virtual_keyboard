export class Lang {
    constructor() {
        this.name = null;
    }

    defineLang(e) {
        // window.addEventListener('keypress', (e) => {
            const engRegEx = /^[a-zA-Z]+$/g;
            const byRegEx = /^[а-яА-ЯёЁўЎ]+$/g;
    
            const getChar = (e) => String.fromCharCode(e.keyCode || e.charCode);
            const char = getChar(e);
            if (engRegEx.test(char)) {
                this.lang = 'eng';
            } else if (byRegEx.test(char)) {
                this.lang = 'by';
            }

            return this.lang;
        // })
    }
}