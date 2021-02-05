import {ExcelComponent} from '@core/ExcelComponent';
import {createHeader} from '@/components/header/header.template';
import * as actions from '@/redux/actions'
import {$} from '@core/dom';
import {debounce, storageName} from '@core/utils';
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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

  onClick(event) {
    const $button = event.target.closest('[data-action]')
    if (!$button) {
      return false
    }
    if ($($button).data.action === 'delete') {
      localStorage.removeItem(storageName(ActiveRoute.param))
    }
    ActiveRoute.navigate('')
    return false
  }
}
