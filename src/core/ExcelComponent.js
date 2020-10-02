import {DOMListener} from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
    this.emitter = options.emitter
    this.unsubscribers = []
    this.prepare()
  }

  // Configuring component before init
  prepare() {}

  // Returns components template
  toHtml() {
    return ''
  }

  // Notify listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribe to event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Initializing component
  init() {
    this.initDomListeners()
  }

  // Deleting component
  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
