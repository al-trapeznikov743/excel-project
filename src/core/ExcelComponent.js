import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []

        this.prepare()
    }
    // Настраиваем компонент до init
    prepare() {}
    toHTML() {
        return ''
    }
    // Уведомляем слушателей об event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
    // Подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subsrcibe(event, fn)
        this.unsubscribers.push(unsub)
    }
    // Инициализируем компонент
    // Добавляем DOM слушателей
    init() {
        this.initDomListeners()
    }
    // Удаляем компонент
    // Чистим слушатели
    destroy() {
        this.removeDomListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}