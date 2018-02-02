
// cbs should be an array of callbacks
// debounce can be between 1 - 10, 1 being most frequent and 10 being least
const addScrollEvents = (cbs, debounce = 3) => {
  let i = 0
  window.document.addEventListener('scroll', () => {
    debounce = debounce > 10 ? 10 : debounce
    debounce = debounce < 1 ? 1 : debounce
    i += 1
    if (i % debounce === 0) return
    cbs.forEach(cb => cb())
  })
}

module.exports = addScrollEvents
