export class Os {
    constructor() {
        this.os = null;
        this.isWin = null;
        this.isMac = null;
    }

    init() {
        this.os = navigator.userAgent;
        this.isWin = (this.os.indexOf('Windows' ) !== -1 || this.os.indexOf('Linux')) !== -1? true : false;
        this.isMac = this.os.indexOf('Mac OS') !== -1 ? true : false;
        
        console.log(this.os);
        if (this.isWin) {
            console.log('windows');
        } else if (this.isMac) {
            console.log('mac');
        }
    }
}