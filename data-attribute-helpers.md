# ENV
Some of the JS features (like the charts) use a global `ENV` object to read configuration data from.
There is a file in the `js` directory called `ENV.js` that has some of these configuration defaults preset.
You should require this file at the top of your js file.

# Charts
You can generate line, bar and pie charts by passing in JSON data to a canvas element's `data-chart-data` attribute. 
Be sure to require the `charts.js` file and call it:
```js
require('./helpers/data/charts')()
```
You can update these values for all of your charts from the `ENV.js` file:
```js
window.ENV = {
  chartColors: ['pink', '#eeeee', 'rgba(0,0,0,1)'],
  chartFontFamily: 'Georgia, serif',
  chartFontColor: 'pink',
  chartFontSize: 13
}
```

### Example HTML
```html
<!-- line -->
<canvas data-chart='line' data-chart-data='{
  "series": "Kenya, Uganda",
  "data":{
    "2012":["2345","3423"],
    "2013":["3456","4562"],
    "2014":["5693","6034"],
    "2015":["8003","9224"],
    "2016":["9234","13347"]
  }
}'></canvas>
<!-- bar -->
<canvas data-chart='bar' data-chart-data='{
  "series": "Kenya, Uganda",
  "data":{
    "2012":["2345","3423"],
    "2013":["3456","4562"],
    "2014":["5693","6034"],
    "2015":["8003","9224"],
    "2016":["9234","13347"]
  }
}'></canvas>
<!-- bar (stacked) -->
<canvas data-chart='bar' data-chart-stacked='true' data-chart-data='{
  "series": "Kenya, Uganda",
  "data":{
    "2012":["2345","3423"],
    "2013":["3456","4562"],
    "2014":["5693","6034"],
    "2015":["8003","9224"],
    "2016":["9234","13347"]
  }
}'></canvas>
<!-- pie -->
<canvas data-chart='pie' data-chart-data='{
  "series": "Kenya, Uganda, Tanzania, Somalia",
  "data":["2345","3423", "4523", "1345"]
}'></canvas>
```
