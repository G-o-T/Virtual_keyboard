

export class Key {
    constructor(value, status, parent) {
        this.value = value;
        this.status = status;
        this.parent = parent;
    }

    _showClickedKey(e) {
        // console.log(String.fromCharCode(e.keyCode || e.charCode));
        console.log(e.target.innerHTML);
        const showFlash = () => e.target.classList.add('key_active');
        const hideFlash = () => e.target.classList.remove('key_active');

        showFlash();
        setTimeout(hideFlash, 150);  
    }

    _typeClickedKey() {

    }


    init() {
        const key = document.createElement('button');
        key.innerHTML = this.value;
        key.classList.add('key');

        switch (this.status) {
            case 'x':
            key.classList.add('key__x');
            break;
            case 'oah':
            key.classList.add('key__cmd', 'key__s');
            break;
            case 'caps lock':
            key.classList.add('key__cmd', 'key__m');
            break;
            case 'double':
            key.classList.add('key__cmd', 'key__l');
            break;
            case 'cmd':
            key.classList.add('key__cmd');
            break;
            case 'space':
            key.classList.add('key__cmd', 'key__xl');
            break;
            case 'arrow-up':
            key.classList = "key key__arrow key__arrow_icon key__arrow_up";
            break;
            case 'arrow-left':
            key.classList = "key key__arrow key__arrow_icon key__arrow_left";
            break;
            case 'arrow-down':
            key.classList = "key key__arrow key__arrow_icon key__arrow_down";
            break;
            case 'arrow-right':
            key.classList = "key key__arrow key__arrow_icon key__arrow_right";
            break;
            default:
            key.classList = 'key';
        }

        key.addEventListener('click', (e) => {
            this._showClickedKey(e);
        });
        this.parent.append(key);
    };
}