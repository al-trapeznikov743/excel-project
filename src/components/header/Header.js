import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'header'
    toHTML() {
        return `
            <input type="text" class="header__input" placeholder="New Table">
            <div>
                <div class="header__button">
                    <span class="material-icons">delete_outline</span>
                </div>
                <div class="header__button">
                    <span class="material-icons">exit_to_app</span>
                </div>
            </div>
        `
    }
}