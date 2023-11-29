import { Container } from './classes/Container.js';

window.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector("body");
    const container = new Container(body);
    container.init();
    container.createChildren();
})
