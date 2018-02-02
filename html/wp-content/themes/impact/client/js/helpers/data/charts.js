const Chart = require('chart.js')
const addCommas = require('format-number')()
const prettyNum = require('../prettyNumber')

const colors = (window.ENV && window.ENV.chartColors) 
  ? window.ENV.chartColors
  : ['tomato', 'blue', 'goldenrod']

const largerYear = (y1, y2, gt) => {
  if(gt) {
    return Number(y1) > Number(y2)
  } else {
    return Number(y1) >= Number(y2)
  }
}

const now = new Date

const currentYear = now.getUTCFullYear()

const merge = (obj, src) => {
  Object.keys(src).forEach(function(key) { obj[key] = src[key] })
  return obj
}

const createDataSets = (series, datapoints, projection, cb) =>
  series.map((s, i) => ({
    projection,
    label: projection ? '' : s ,
    data: datapoints.map((arr, ii) => cb ? cb(arr, i, ii) : arr[i])
  }))

const mergeOptionsByType = { 
  line: ({baseOptions, i, projection}) => {
    const color = colors[i % colors.length]
    const options = merge(baseOptions, {
      fill: false,
      backgroundColor: color,
      borderColor: color,
      lineTension: 0
    })
    return projection ? Object.assign({borderDash: [5,5]}, options) : options
  },
  bar: ({baseOptions, i, labels}) => {
    const color = colors[i % colors.length]
    const bgColors = labels.map(l => largerYear(currentYear, l) ? color : 'rgba(0,0,0,0.2)')
    return merge(baseOptions, {
      borderColor: color,
      borderWidth: 2,
      backgroundColor: bgColors
    })
  }
}

// elm should be a canvas element
// inView should be a boolean
// i should be the index of the chart on the page
const renderChart = (elm, i) => {
  if(!elm || (elm && elm.nodeName !== 'CANVAS')) return
  const chartType = elm.getAttribute('data-chart')
  const stacked =  Boolean(elm.getAttribute('data-chart-stacked'))
  const elmData = JSON.parse(elm.getAttribute('data-chart-data'))

  if(!elmData) {
    console.warn('data-chart-data attribute must contain data')
    return 
  }
  if(!chartType) {
    console.warn('data-chart attribute must contain a valid chart type')
    return
  }

  let ctx
  let chart
  let datasets = []

  const chartKey = `chart_${i}`
  const labels = Object.keys(elmData.data) || []
  const datapoints = Object.values(elmData.data) || []
  const series = elmData.series.split(',').filter(Boolean).map(s => s.trim())
  const seriesLen = series.length

  const latestYear = labels[labels.length - 1]

  if (chartType === 'line' && largerYear(latestYear, currentYear)) {
    datasets = createDataSets(
      series, 
      datapoints, 
      false,
      (arr, i, ii) => largerYear(currentYear, labels[ii]) ? arr[i] : NaN
    )
    datasets = datasets.concat(
      createDataSets(
        series, 
        datapoints, 
        true,
        (arr, i, ii) => largerYear(labels[ii], currentYear) ? arr[i] : NaN
      )
    )
  } 
  if (chartType === 'bar') {
    datasets = createDataSets(series, datapoints, false)
  }
  if (chartType === 'pie') {
    datasets = [{
      data: datapoints[0],
      backgroundColor: colors,
    }]
  }

  const createDataset = ({chartType, label, data, projection, i}) => {
    const baseOptions = {
      label,
      data,
    }
    return mergeOptionsByType[chartType]({baseOptions, i, projection, labels})
  }

  const defaultOptions = {
    scaleBeginAtZero: true,
    animation: { duration: 3000 },
    tooltips: { 
      mode: chartType === 'bar' ? 'index' : 'nearest',
      callbacks: { 
        label: (label, data) => {
          if(chartType === 'pie') {
            return addCommas(data.datasets[0].data[label.index])
          }
          return addCommas(label.yLabel)
        }
      }
    },
    legend: {
      onClick: () => {},
      labels: {
        filter: legendItem => Boolean(legendItem.text),
        usePointStyle: true
    }}
  }

  ctx = elm.getContext('2d')
  chart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: chartType === 'pie' ? series : labels,
      datasets: chartType === 'pie' 
        ? datasets
        : datasets.map(({label, data, projection}, i) =>
            createDataset({
              chartType,
              label, 
              data, 
              projection, 
              i: projection ? (i - 2) : i
            })
          )
    },
    options: chartType === 'pie' 
      ? defaultOptions
      : merge({
          scales: { 
            xAxes: [{stacked}],
            yAxes: [{ 
              ticks: { callback: prettyNum },
              stacked,
            }]
          }},
          defaultOptions
      )
  })
}

const initCharts = () => {
  document.querySelectorAll('[data-chart]').forEach(renderChart)
}

module.exports = initCharts
