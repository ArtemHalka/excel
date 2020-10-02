import {range} from '@core/utils';

export function shouldResize(event) {
  return event.target.dataset.resize
}

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)
  return cols.reduce((acc, col)=>{
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelector(key, {col, row}) {
  switch (key) {
    case 'ArrowLeft':
      if (col > 0) {
        col--
      }
      break;
    case 'ArrowUp':
      if (row > 0) {
        row--
      }
      break;
    case 'Tab':
    case 'ArrowRight':
      col++
      break;
    case 'Enter':
    case 'ArrowDown':
      row++
      break;
    default:
      break;
  }
  return `[data-id="${row}:${col}"]`
}
