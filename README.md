## Getting started with this front-end setup

1. We are using node to run our various compiling processes for both JS and CSS. So first of all, make sure you have node installed globally on your machine.
2. Now that you have node installed, you can run `npm install`, which will install all of the packages listed in `package.json` and save them to the `node_modules` directory.
3. To start developing, run `npm run watch` from your terminal. This will watch for any JS and CSS changes and compile and write them to the where you specified. You can also just run `npm run watch-css` or `npm run watch-js`.
4. When you are done developing, run `npm run build`. This will minify your CSS and JS and make it production-ready.

### CSS
- we are using a custom build of [tachyons](http://tachyons.io/) as our css toolkit - the custom build excludes any rules related to debugging, colors, and font-families
- for list of postcss plugins, see `postcss.config.js`
- avoid nesting
- avoid `important!`
- use `rem`s or `em`s over pixels when possible

### JS
- we are using [browserify](https://github.com/browserify/browserify#usage) for requiring files
- es6 syntax is supported

### Demo
To edit the demo page, run `npm run demo` and edit the `index` files in the `demo` directory.
