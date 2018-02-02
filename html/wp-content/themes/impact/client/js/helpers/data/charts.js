const Chart = require('chart.js')
const addCommas = require('format-number')()
const prettyNum = require('../prettyNumber')
const merge = require('../merge')

const getEnvVal = (key, fallBack) => 
  (window.ENV && window.ENV[key]) ? window.ENV[key] : fallBack

const colors = getEnvVal('chartColors', ['tomato', 'goldenrod'])
const fontFamily = getEnvVal('chartFontFamily', '-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif')
const fontColor = getEnvVal('chartFontColor', 'rgba(0,0,0,0.8)')

// setting some global defaults use window.ENV or fallbacks
Chart.defaults.global.defaultFontFamily = fontFamily
Chart.defaults.global.defaultFontColor = fontColor

const createDataSets = (series, datapoints, cb) =>
  series.map((s, i) => ({
    label: s,
    data: datapoints.map((arr, ii) => cb ? cb(arr, i, ii) : arr[i])
  }))

const mergeOptionsByType = { 
  line: ({baseOptions, i}) => {
    const color = colors[i % colors.length]
    return merge(baseOptions, {
      fill: false,
      backgroundColor: color,
      borderColor: color,
      lineTension: 0
    })
  },
  bar: ({baseOptions, i, labels}) => {
    const color = colors[i % colors.length]
    const bgColors = labels.map(_ => color)
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

  if (chartType === 'line') {
    datasets = createDataSets(
      series, 
      datapoints, 
      (arr, i, ii) => arr[i]
    )
  }
  if (chartType === 'bar') {
    datasets = createDataSets(series, datapoints)
  }
  if (chartType === 'pie') {
    datasets = [{
      data: datapoints[0],
      backgroundColor: colors,
    }]
  }

  const createDataset = ({chartType, label, data, i}) => {
    const baseOptions = {
      label,
      data,
    }
    return mergeOptionsByType[chartType]({baseOptions, i, labels})
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
        : datasets.map(({label, data}, i) =>
            createDataset({
              chartType,
              label, 
              data, 
              i
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

const initCharts = () =>
  document.querySelectorAll('[data-chart]').forEach(renderChart)

module.exports = initCharts
