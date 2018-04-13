# ENV
Some of the JS features (like the charts) use a global `ENV` object to read configuration data from.
There is a file in the `js` directory called `ENV.js` that has some of these configuration defaults preset.
You should require this file at the top of your js file.

# Charts
You can generate line, bar and pie charts by passing in JSON data to a canvas element's `data-chart-data` attribute. 

### JS
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

### HTML
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

# Pretty number
This helper is meant for displaying large numbers (>= 1000) in a readable way. You can add prefixes and suffixes too.

### JS
```js
require('./helpers/data/prettyNumber')()
```

### HTML
```html
<h3 data-pretty-number='244'></h3>
<h3 data-pretty-number='1234'></h3>
<h3 data-pretty-number='73692'></h3>
<h3 data-pretty-number='854934' data-pretty-number-prefix='$'></h3>
<h3 data-pretty-number='234987252' data-pretty-number-suffix='🔥'></h3>
```
will result in:</br>

244</br>
1,234</br>
73.7K</br>
$854.9K</br>
235M🔥</br>

# Toggle classes (self)
This will toggle the classes that are in the data attribute for the element.

### JS
```js
require('./helpers/data/toggleClasses').dataToggleClassesSelf()
```

### HTML
```
<a href='#' data-toggle-classes-self='color-red strike'>Click me!</a>

```

# Toggle classes (target)
This will toggle the classes that are in the data attribute for a target.

### JS
```js
require('./helpers/data/toggleClasses').dataToggleClassesTarget()
```

### HTML
```
<a href='#' data-toggle-classes-target='#js-toggle-classes-target color-red ttu'>
  Click me!
</a>
<h1 id='js-toggle-classes-target'>Aloha</h1>
```
### Swap text
This will cycle through a list (string separated by `|`s) and display each item for either 2000 ms or a provided timeout value.

### JS

```js
require('./helpers/data/swapText')()
```

### HTML
```html
<p class='f3' data-swap-text='Don Quixote by Miguel de Cervantes | In Search of Lost Time by Marcel Proust | Ulysses by James Joyce | The Odyssey by Homer' data-swap-text-timeout='3000'>
</p>
```
      

