module.exports = (ctx) => ({
  plugins: {
    'postcss-at-rules-variables': {},
    'postcss-easy-import': {},
    'postcss-assets': {loadPaths: ['../public']},
    'postcss-for': {},
    'postcss-each': {},
    'postcss-conditionals': {},
    'postcss-cssnext': {
      warnForDuplicates: false,
      features: {rem: false},
    },
    'cssnano': ctx.env === 'production' ? {} : false
  }
})
