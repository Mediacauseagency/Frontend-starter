const checkHref = ev => {
  const href = (ev.target.attributes['href'].value || '').trim()
  return (href && href !== '#')
}

const getClassNames = (elm, attr) => elm.getAttribute(attr).split(' ')

const dataToggleClassesSelf = () =>
  document.querySelectorAll('[data-toggle-classes-self]').forEach((elm) => {
    elm.addEventListener('click', (ev) => {
      if (checkHref(ev)) return
      ev.preventDefault()
      const classNames = getClassNames(elm, 'data-toggle-classes-self')
      classNames.forEach((className) => {
        elm.classList.toggle(className.trim())
      })
    })
  })

const dataToggleClassesTarget = () =>
  document.querySelectorAll('[data-toggle-classes-target]').forEach((elm) => {
    elm.addEventListener('click', (ev) => {
      if (checkHref(ev)) return
      ev.preventDefault()
      const [targetSelector, ...classNames] = getClassNames(elm, 'data-toggle-classes-target')
      const targets = document.querySelectorAll(targetSelector)
      classNames.forEach((className, i) => {
        targets.forEach((target) => {
          target.classList.toggle(className.trim())
        })
      })
    })
  })

module.exports = {
  dataToggleClassesSelf,
  dataToggleClassesTarget
}
