// adds commas to numbers
const formatNumber = require('format-number')()
const addScrollEvents = require('../addScrollEvents')
const toggleInView = require('../toggleInView')

const attr = 'data-increment'

const getExtraAttr = (elm, extra) =>
  (elm.getAttribute(`${attr}-${extra}`) || '').trim()

const animate = (time, goal, incrementBy, elm, start) => {
  window.setTimeout(() => {
    const currentStep = start + incrementBy
    const currentStepCapped = currentStep >= goal ? goal : currentStep
    const suffix = getExtraAttr(elm, 'suffix')
    const prefix = getExtraAttr(elm, 'prefix')
    elm.innerText = `${prefix || ''}${formatNumber(currentStepCapped)}${suffix || ''}`
    if (currentStepCapped < goal) {
      // ease out function
      let newTime = start < (goal / 1.75) ? time : time * 1.15
      animate(newTime, goal, incrementBy, elm, currentStepCapped)
    }
  }, time)
}

const incrementOnScroll = () =>
  addScrollEvents([
    () => toggleInView(`[${attr}]`, incrementOnScrollCb)
  ])

const incrementOnScrollCb = (elm, inView, i) => {
  const envKey = `increment_animation_running_${i}`
  window.ENV = window.ENV ? window.ENV : {}

  if (!inView || window.ENV[envKey]) return

  window.ENV[envKey] = true

  const goal = Number(elm.getAttribute(`${attr}`) || 0)

  if (!Number.isInteger(goal)) {
    return console.warn(`the ${attr} attribute must be an integer`)
  }

  // the number of steps in the animation
  const incrementBy = Math.ceil(goal / 30)

  animate(60, goal, incrementBy, elm, 0)
}

module.exports = incrementOnScroll
