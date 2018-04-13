# ENV
Some of the JS features (like the charts) use a global `ENV` object to read configuration data from.
There is a file in the `js` directory called `ENV.js` that has some of these configuration defaults preset.
You should require this file at the top of your js file.

# Charts
You can generate line, bar and pie charts by passing in JSON data to a canvas element's `data-chart-data` attribute. 
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
```js
require('./helpers/data/prettyNumber')()
```
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
```js
require('./helpers/data/toggleClasses').dataToggleClassesSelf()
```
```
<a href='#' data-toggle-classes-self='color-red strike'>Click me!</a>
```


# Toggle classes (target)
This will toggle the classes that are in the data attribute for a target.
```js
require('./helpers/data/toggleClasses').dataToggleClassesTarget()
```
```
<a href='#' data-toggle-classes-target='#js-toggle-classes-target color-red ttu'>
  Click me!
</a>
<h1 id='js-toggle-classes-target'>Aloha</h1>
```


# Swap text
This will cycle through a list (string separated by `|`s) and display each item for either 2000 ms or a provided timeout value.
```js
require('./helpers/data/swapText')()
```
```html
<p class='f3' data-swap-text='Don Quixote by Miguel de Cervantes | In Search of Lost Time by Marcel Proust | Ulysses by James Joyce | The Odyssey by Homer' data-swap-text-timeout='3000'>
</p>
```
      
      
# Increment
This will increment and format (adds commas) a number from 0, when the element is in view.
```js
require('./helpers/data/incrementAnimation')()
```
```html
<h2 class='code' data-increment='34562'></h2>
<h2 class='code' data-increment='1834523' data-increment-prefix='$'></h2>
<h2 class='code' data-increment='98' data-increment-suffix='%'></h2>
```


# In view add class
This simply adds a class to the element when it is in view (good for animations).
```js
require('./helpers/data/inViewAddClass')()
```
```html
<div class='f-6' data-in-view-add-class='my-fancy-animation'>🤔</div>
```

# Modal
Use `data-modal` to define your modal, and `data-modal-open`, and `data-modal-close` to open/close your modal.

```js
require('./helpers/data/modal')()
```
```html
<button data-open-modal='demo-modal'>Open modal</button>
<div data-modal='demo-modal'>
  <div>
    <button data-close-modal='demo-modal'>X</button>
    <h1>Aloha</h1>
  </div>
</div>
```

# Tooltips
No JS needed. 
```html
<button class='tooltip--top' data-tooltip='Aloha'>Top</button>
<button class='tooltip--bottom' data-tooltip='Aloha'>Bottom</button>
<button class='tooltip--left' data-tooltip='Aloha'>Left</button>
<button class='tooltip--right' data-tooltip='Aloha'>Right</button>
```

