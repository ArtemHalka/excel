import {toInlineStyles} from '@core/utils';
import {defaultStyles} from '@/constants';
import {parse} from '@core/parse';

const CODES = {
  A: 65,
  Z: 90
}

function toCell(state, row) {
  return function(_, col) {
    const id = `${row}:${col}`
    const width = getWidth(state.colState, col)
    const content = state.dataState[id] || ''
    const styles = toInlineStyles({...defaultStyles, ...state.stylesState[id]})
    return `<div 
              class="cell" 
              data-type="cell"
              data-col="${col}" 
              data-id="${id}" 
              data-value="${content}" 
              contenteditable
              style="${styles}; ${width}"
            >${parse(content)}</div>`
  }
}

function toColumn({col, index, width}) {
  return `
    <div 
        class="column" 
        style="${width}" 
        data-col="${index}" 
        data-type="resizable"
    >
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function getWidth(state, index) {
  return state[index] ? `width: ${state[index]}px` : ''
}

function getHeight(state, index) {
  return state[index] ? `style="height: ${state[index]}px"` : ''
}

function withWidthFrom(state) {
  return function(col, index) {
    return {
      col, index, width: getWidth(state, index)
    }
  }
}

function createRow(content, number = '', height = '') {
  const resize = number
    ? '<div class="row-resize" data-resize="row"></div>'
    : ''
  return `
    <div class="row" data-row="${number}" ${height} data-type="resizable">
      <div class="row-info">
        ${number}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 10, state = {}) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(withWidthFrom(state.colState))
      .map(toColumn)
      .join('')
  rows.push(createRow(cols))
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(state, row))
        .join('')
    const height = getHeight(state.rowState, row + 1)
    rows.push(createRow(cells, row + 1, height))
  }
  return rows.join('')
}
