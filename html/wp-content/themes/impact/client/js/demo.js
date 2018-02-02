require('./helpers/htmlToText')()
require('./helpers/data/prettyNumber')()
require('./helpers/data/swapText')()
require('./helpers/data/incrementAnimation')()
require('./helpers/data/charts')()
const {dataToggleClassesSelf, dataToggleClassesTarget} = require('./helpers/data/toggleClasses')

dataToggleClassesSelf()
dataToggleClassesTarget()



