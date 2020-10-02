export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  clear() {
    this.group.forEach($cell => $cell.removeClass(TableSelection.className))
    this.group = []
  }

  select($el) {
    this.clear()
    this.group.push($el)
    this.current = $el
    $el.focus().addClass(TableSelection.className)
  }

  selectGroup($cells) {
    this.clear()
    this.group = $cells
    $cells.forEach($cell => $cell.addClass(TableSelection.className))
  }
}
