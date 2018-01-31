const addCommas = require('format-number')()
const round = num => Math.round(num * 10) / 10

// takes a number and returns a formatted string:
//   1234 => '1,234'
//   12345 => '1.2K'
//   1234567 => '1.2M'
const prettyNumber = num => {
  if (!num) return '0'
  if (num <= 9999) return addCommas(num)
  if (num <= 999999) return round(num * 0.001) + 'K'
  return addCommas(round(num * 0.000001)) + 'M'
}

module.exports = prettyNumber
