const addScrollEvents = require('./helpers/addScrollEvents')
require('./helpers/htmlToText')()
require('./helpers/data/prettyNumber')()
require('./helpers/data/swapText')()
const {dataToggleClassesSelf, dataToggleClassesTarget} = require('./helpers/data/toggleClasses')

dataToggleClassesSelf()
dataToggleClassesTarget()



