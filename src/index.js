import {Router} from '@core/routes/Router'
import {ExcelPage} from './pages/ExcelPage'
import {DashboardPage} from './pages/DashboardPage'
import './sass/index.sass'

new Router('#app', {
    dashboard: DashboardPage,
    excel: ExcelPage
})