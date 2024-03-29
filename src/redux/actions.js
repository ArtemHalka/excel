import {
  CHANGE_TEXT,
  CHANGE_STYLES,
  TABLE_RESIZE,
  APPLY_STYLE,
  CHANGE_TITLE,
  INIT
} from '@/redux/types';

export function init() {
  return {
    type: INIT
  }
}

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLES,
    data
  }
}

export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data
  }
}

export function changeTitle(data) {
  return {
    type: CHANGE_TITLE,
    data
  }
}
