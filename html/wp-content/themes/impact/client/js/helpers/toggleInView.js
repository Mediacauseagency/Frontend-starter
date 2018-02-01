// takes a selector and a callback that gets called
// with three args: 
// 1. elm
// 2. whether the elm is in view
// 3. the index of that elm on the page
const toggleInView = (selector, cb) => {
  const elms = document.querySelectorAll(selector)
  elms.forEach((elm, i) => {
    const scrollTop = window.document.body.scrollTop + window.innerHeight
    const elmTop = findOffset(elm)
    const inView = scrollTop >= elmTop
    cb(elm, inView, i)
  })
}

const findOffset = elm => {
  if(elm.offsetTop) return elm.offsetTop
  return findOffset(elm.offsetParent)
}

module.exports = toggleInView
