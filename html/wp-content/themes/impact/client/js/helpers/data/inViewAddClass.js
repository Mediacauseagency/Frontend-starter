const addScrollEvents = require('../addScrollEvents')
const toggleInView = require('../toggleInView')

const attr = 'data-in-view-add-class'

const inViewAddClass = (elm, inView, i) => {
  const envKey = `in_view_add_class_done_{i}`
  window.ENV = window.ENV ? window.ENV : {}
  if (!inView || window.ENV[envKey]) return
  window.ENV[envKey] = true
  const className = (elm.getAttribute(attr) || '').trim()
  elm.classList.add(className)
}

module.exports = () =>
  addScrollEvents([
    () => toggleInView(`[${attr}]`, inViewAddClass)
  ])
