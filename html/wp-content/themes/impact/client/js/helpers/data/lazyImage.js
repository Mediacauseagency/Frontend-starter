const lazyImage = () => {
  const elms = document.querySelectorAll('[data-lazy-image]')
  elms.forEach(elm => {
    const src = elm.getAttribute('data-lazy-image')
    const img = new Image
    img.src = src
    img.onload = () => {
      elm.src = src
    }
  })
}

module.exports = lazyImage
