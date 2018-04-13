# Charts

## Line chart

### HTML
```html
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
```

## Bar chart (not stacked)

### HTML
```html
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
```

## Bar chart (stacked)

### HTML
```html
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
```

## Pie chart

### HTML
```
<canvas data-chart='pie' data-chart-data='{
  "series": "Kenya, Uganda, Tanzania, Somalia",
  "data":["2345","3423", "4523", "1345"]
}'></canvas>
```
