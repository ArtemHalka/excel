import {storage} from '@core/utils';

function toHTML(val) {
  const model = storage(val)
  const date = new Date(model.lastVisited)
  const id = val.split(':')[1]
  const title = model.title
  return `<li class="db__record">
            <a href="#excel/${id}">${title}</a>
            <strong>${date.toLocaleString()}</strong>
          </li>`
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  if (!keys.length) {
    return `<p>No tables has found</p>`
  }
  return `
        <div class="db__list-header">
          <span>Name</span><span>Last visit</span>
        </div>
        <ul class="db__list">
            ${keys.map(toHTML).join('')}
        </ul>`
}
