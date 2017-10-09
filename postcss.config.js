module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {},
    'postcss-assets': {loadPaths: ['../fonts/', '../svgs']},
    'precss' : {},
    'cssnano': ctx.env === 'production' ? {} : false
  }
})
