const prettyNumber = require('../prettyNumber')

const dataPrettyNumber = () => 
  document.querySelectorAll('[data-pretty-number]').forEach((elm) => {
    const string = elm.getAttribute('data-pretty-number')
    elm.innerHTML = prettyNumber(string)
  })

module.exports = dataPrettyNumber
