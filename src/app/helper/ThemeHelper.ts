import { Renderer2 } from '@angular/core';

export default class ThemeHelper {

    constructor(private render: Renderer2) { }

    saveTheme(value: string) {
        localStorage.setItem('theme', value);
    }

    loadTheme() {
        return localStorage.getItem('theme') || 'white';
    }

    themeWhite() {
        this.removeClass('background-purple');
        this.addClass('background-white');
        this.saveTheme('white');
    }

    themePurple() {
        this.removeClass('background-white');
        this.addClass('background-purple');
        this.saveTheme('purple');
    }

    addClass(value: string) {
        this.render.addClass(document.body, value);
    }

    removeClass(value: string) {
        this.render.removeClass(document.body, value);
    }

}
