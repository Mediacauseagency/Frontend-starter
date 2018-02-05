module.exports = () => {
  openOrCloseModal({open: true, attribute: 'data-open-modal'})
  openOrCloseModal({open: false, attribute: 'data-close-modal'})
  const elms = document.querySelectorAll('[data-modal]')
  elms.forEach(elm => {
    if (!elm) return
    elm.addEventListener('click', (ev) => {
      const target = ev.target
      if (!target.getAttribute('data-modal')) return 
      target.setAttribute('data-modal-is-visible', false)
    })
  })
}

const openOrCloseModal = ({open, attribute}) => {
  const elms = document.querySelectorAll(`[${attribute}]`)
  elms.forEach(elm => {
    if (!elm) return
    elm.addEventListener('click', (ev) => {
      const modalName = ev.target.getAttribute(attribute)
      const modalElm = document.querySelector(`[data-modal=${modalName}]`)
      if (!modalElm) return
      modalElm.setAttribute('data-modal-is-visible', open)
    })
  })
}
