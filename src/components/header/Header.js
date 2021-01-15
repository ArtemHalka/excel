import {ExcelComponent} from '@core/ExcelComponent';
import {createHeader} from '@/components/header/header.template';
import * as actions from '@/redux/actions'
import {$} from '@core/dom';
import {debounce} from '@core/utils';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHtml() {
    return createHeader(this.store.getState())
  }

  onInput(event) {
    this.$dispatch(actions.changeTitle($(event.target).text()))
  }
}
