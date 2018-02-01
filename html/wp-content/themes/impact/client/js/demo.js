const addScrollEvents = require('./helpers/addScrollEvents')
const prettyNumber = require('./helpers/prettyNumber')

document.querySelectorAll('.js-html').forEach((elm) => {
  const pre = document.createElement('pre')
  const code = document.createElement('code')
  code.innerText = elm.innerHTML
  pre.appendChild(code)
  elm.insertBefore(pre, elm.childNodes[0])
})

document.querySelectorAll('[data-pretty-number]').forEach((elm) => {
  const string = elm.getAttribute('data-pretty-number')
  elm.innerHTML = prettyNumber(string)
})

document.querySelectorAll('[data-toggle-classes-self]').forEach((elm) => {
  elm.addEventListener('click', (ev) => {
    const href = (ev.target.attributes['href'].value || '').trim()
    if(href && href !== '#') return
    ev.preventDefault()
    const classNames = elm.getAttribute('data-toggle-classes-self').split(' ')
    classNames.forEach((className) => {
      elm.classList.toggle(className.trim())
    })
  })
})

document.querySelectorAll('[data-toggle-classes-target]').forEach((elm) => {
  elm.addEventListener('click', (ev) => {
    const href = (ev.target.attributes['href'].value || '').trim()
    if(href && href !== '#') return
    ev.preventDefault()
    const classNames = elm.getAttribute('data-toggle-classes-target').split(' ')
    const targets = document.querySelectorAll(classNames[0])
    classNames.forEach((className, i) => {
      if(i === 0) return
      targets.forEach((target) => {
        target.classList.toggle(className.trim())
      })
    })
  })
})


const replaceText = (text, parent) => {
  const child = document.createElement('div')
  child.innerText = text
  child.style.position = 'absolute'
  child.style.top = '0'
  child.style.top = 'left'
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

swapText()

