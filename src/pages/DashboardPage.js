import {Page} from '../core/page/Page'
import {$} from '@core/dom'
import {createRecordsTable} from '../shared/dashboard.functions'

export class DashboardPage extends Page {
    getRoot() {
        const now = Date.now().toString()
        return $.create('div', 'db')
            .html(`
                <div class="db__header no-use">
                    <h1>Excel Dashboard</h1>
                </div>
                <div class="db__new">
                    <div class="db__view">
                        <a href="#excel/${now}" class="db__create no-use">New Table</a>
                    </div>
                </div>
                <div class="db__table db__view no-use">
                    ${createRecordsTable()}
                </div>
            `
        )
    }
}