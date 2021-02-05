import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
  rowState: {},
  colState: {},
  currentText: '',
  dataState: {},
  currentStyles: defaultStyles,
  stylesState: {},
  title: defaultTitle,
  lastVisited: new Date().toJSON()
}
const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : defaultState
}
