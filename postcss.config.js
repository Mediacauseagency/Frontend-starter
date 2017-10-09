module.exports = (ctx) => ({
  plugins: {
    'postcss-at-rules-variables': {},
    'postcss-import': {},
    'postcss-assets': {loadPaths: ['../fonts/', '../svgs']},
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
