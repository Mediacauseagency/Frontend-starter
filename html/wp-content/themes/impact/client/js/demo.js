const addScrollEvents = require('./helpers/addScrollEvents')
const prettyNumber = require('./helpers/prettyNumber')


document.querySelectorAll('.js-show-example').forEach((elm) => {
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
      if(i !== 0) {
        targets.forEach((target) => {
          target.classList.toggle(className.trim())
        })
      }
    })
  })
})



