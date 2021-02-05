export function createHeader(state = {}) {
  return `
      <input type="text" class="input" value="${state.title}">
      <div>
        <div class="button" data-action="exit">
          <i class="material-icons">exit_to_app</i>
        </div>
        <div class="button" data-action="delete">
          <i class="material-icons">delete</i>
        </div>
      </div>
    `
}
