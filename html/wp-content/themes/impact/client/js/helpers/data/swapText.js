const style = require('../style')

const replaceText = (text, parent) => {
  const child = document.createElement('div')
  child.innerText = text
  style(child, {
    position: 'absolute',
    left: 0,
    top: 0
  })
  child.className = 'js-swap-text-child'
  const previousChild = parent.querySelector('.js-swap-text-child')
  previousChild && previousChild.remove()
  parent.appendChild(child)
}

const show = (text, len, elm, i, timeout) => {
  window.setTimeout(() => {
    replaceText(text[i], elm)
    const child = elm.querySelector('.js-swap-text-child')
    child.classList.add('fade-in')
    child.classList.remove('fade-out')
    window.setTimeout(() => {
      child.classList.add('fade-out')
      child.classList.remove('fade-in')
    }, timeout - 300)
    show(text, len, elm, ++i % len, timeout)
  }, timeout)
}

const swapText = () => {
  const elms = document.querySelectorAll('[data-swap-text]')
  const timeoutElm = document.querySelectorAll('[data-swap-text-timeout]')[0]
  const timeout = timeoutElm
    ? timeoutElm.getAttribute('data-swap-text-timeout')
    : 2000
  elms.forEach((elm) => {
    let i = 0
    const text = (elm.getAttribute('data-swap-text') || '')
      .split(/\.|,/)
      .filter(Boolean)
      .map(s => s.trim())
    const longest = text.reduce((longest, current) =>
      (current.length >= longest.length)
        ? current
        : longest
    , '')
    elm.style.position = 'relative'
    const spacer = document.createElement('div')
    spacer.innerText = longest
    spacer.style.visibility = 'hidden'
    elm.appendChild(spacer)
    replaceText(text[0], elm)
    const len = text.length
    window.setTimeout(() => {
      const child = elm.querySelector('.js-swap-text-child')
      child.classList.add('fade-out')
    }, timeout - 300)
    show(text, len, elm, ++i, timeout)
  })
}

module.exports = swapText
