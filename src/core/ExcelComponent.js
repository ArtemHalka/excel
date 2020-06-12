import {DOMListener} from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name
  }

  // Returns components template
  toHtml() {
    return ''
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
  }
}
