import { Renderer2 } from '@angular/core';

export default class ThemeHelper {

    constructor(private render: Renderer2) { }

    saveTheme(value: string) {
        localStorage.setItem('theme', value);
    }

    loadTheme() {
        return localStorage.getItem('theme') || 'green';
    }

    themeGreen() {
        this.removeClass('background-blue');
        this.addClass('background-green');
        this.saveTheme('green');
    }

    themeBlue() {
        this.removeClass('background-green');
        this.addClass('background-blue');
        this.saveTheme('blue');
    }

    addClass(value: string) {
        this.render.addClass(document.body, value);
    }

    removeClass(value: string) {
        this.render.removeClass(document.body, value);
    }

}
