import {$} from '@core/dom';

export function tableResize(event, $root) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    // const $parent = $resizer.$el.parentNode // bad
    // const $parent = $resizer.$el.closest('.column') // better but bad
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const colResize = $resizer.data.resize === 'col'
    const cells = colResize
      ? $root.findAll(`[data-col="${$parent.data.col}"]`)
      : null
    const styleProp = colResize ? 'width' : 'height'
    let value = 0
    document.onmousemove = e => {
      const delta = colResize
        ? Math.floor(e.pageX - coords.right)
        : Math.floor(e.clientY - coords.bottom)
      value = parseInt(coords[styleProp] + delta)
      $parent.css({[styleProp]: value + 'px'})
    }
    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null
      if (cells) {
        cells.forEach(element => element.style.width = value + 'px')
      }
      resolve({
        value,
        stateName: colResize ? 'colState' : 'rowState',
        id: colResize ? $parent.data.col : $parent.data.row
      })
    }
  })
}
