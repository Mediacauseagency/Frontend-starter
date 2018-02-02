const htmlToText = () => {
  document.querySelectorAll('.js-html').forEach((elm) => {
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    code.innerText = (elm.innerHTML || '')
      .replace(/"/g, "'")
      .replace(/&quot;/g, '"')
    pre.appendChild(code)
    elm.insertBefore(pre, elm.childNodes[0])
  })
}

module.exports = htmlToText
