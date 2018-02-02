const prettyNumber = require('../prettyNumber')

const getAttr = (elm, attr) =>
  (elm.getAttribute(attr) || '').trim()

const dataPrettyNumber = () =>
  document.querySelectorAll('[data-pretty-number]').forEach((elm) => {
    const number = getAttr(elm, 'data-pretty-number')
    const prefix = getAttr(elm, 'data-pretty-number-prefix')
    const suffix = getAttr(elm, 'data-pretty-number-suffix')
    elm.innerHTML = `${prefix || ''}${prettyNumber(number)}${suffix || ''}`
  })

module.exports = dataPrettyNumber
