// adds commas to numbers
const formatNumber = require('format-number')()

const animate = (time, goal, incrementBy, elm, start, i) => {
  window.setTimeout(() => {
    const currentStep = start + incrementBy
    const currentStepCapped = currentStep >= goal ? goal : currentStep
    const suffix = (elm.getAttribute('data-increment-suffix') || '').trim()
    elm.innerText = formatNumber(currentStepCapped + (suffix ? suffix : ''))
    if(currentStepCapped < goal) {
      // ease out function
      let newTime = start < (goal / 1.75) ? time : time * 1.15
      animate(newTime, goal, incrementBy, elm, currentStepCapped)
    }
  }, time)
}

const increment = (elm, inView, i) => {
  const envKey = `increment_animation_running_${i}`
  if(!inView) {
    window.ENV[envKey] = false
    return 
  }

  if(window.ENV[envKey]) return

  window.ENV[envKey] = true

  const goal = Number(elm.getAttribute('data-increment') || 0)

  if (!Number.isInteger(goal)) {
    return console.warn("the data-increment attribute must be an integer")
  }

  // the number of steps in the animation
  const incrementBy = Math.ceil(goal / 30)

  animate(60, goal, incrementBy, elm, 0, i)
}

module.exports = increment
