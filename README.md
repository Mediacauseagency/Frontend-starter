## Getting started with this front-end setup

1. We are using node to run our various compiling processes for both JS and CSS. So first of all, make sure you have node installed globally on your machine.
2. Now that you have node installed, you can run `npm install`, which will install all of the packages listed in `package.json` and save them to the `node_modules` directory.
3. Before you start developing you'll need to set where your built CSS and JS will get compiled to. Open up `package.json` and update the `css-source` and `js-source` values. 
4. To start developing, run `npm run watch` from your terminal. This will watch for any JS and CSS changes and compile and write them to the where you specified. You can also just run `npm run watch-css` or `npm run watch-js`.
5. When you are done developing, run `npm run build`. This will minify your CSS and JS and make it production-ready.

### CSS
- [postcss-import](https://github.com/postcss/postcss-import) lets you import css easily (including from node_modules)
- [precss](https://github.com/jonathantneal/precss) lets you use SCSS-like features
- let [autoprefixer](https://github.com/postcss/autoprefixer) take care of browser prefixes
- avoid nesting
- avoid `important!`
- use `rem`s or `em`s over pixels possible

### JS
- we are using [browserify](https://github.com/browserify/browserify#usage) for requiring files
- es6 syntax is supported

### Demo
To edit the demo page, run `npm run demo` and edit the `index` files in the `demo` directory.
