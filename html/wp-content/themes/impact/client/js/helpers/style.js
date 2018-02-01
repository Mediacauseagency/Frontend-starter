const style = (elm, obj = {}) =>
  Object.keys(obj).map((key) => {
    elm && elm.style && (elm.style[key] = obj[key])
  })

module.exports = style
