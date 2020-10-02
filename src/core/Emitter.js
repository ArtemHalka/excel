export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // Уведомляем слушателей, если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // on, listen
  // Подписываемся на уведомления
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// const emitter = new Emitter()
// const unsub =
// emitter.subscribe('test', data => console.log('Subscribe', data))
// emitter.emit('dasfsf', 42)
// setTimeout(() => {
//   emitter.emit('test', 'timeout 2 sec')
// }, 2000)
// setTimeout(() => {
//   unsub()
// }, 3000)
// setTimeout(() => {
//   emitter.emit('test', 'timeout 4 sec')
// }, 4000)
