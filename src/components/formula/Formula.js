import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }
    toHTML() {
        return `
            <div class="formula-info">fx</div>
            <div class="formula__input" contenteditable spellcheck="false"></div>
        `
    }
    onInput(event) {
        console.log(this.$root)
        /* console.log('Formula: onInput', event) */
    }
    onClick() {
        console.log('mk')
    }
}