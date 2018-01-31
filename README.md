# wp-starter

## Backend

### Getting started

1. Download [Vagrant](https://www.vagrantup.com/docs/installation/) and [VirtualBox](https://www.vagrantup.com/docs/installation/), if you haven't already downloaded them.
2. Start up the virtual box by running `vagrant up` (this will take a while, especially the first time).
3. Populate the virtual box database:
  - Have someone who has access to the server that you will be SSH-ing into (usually the staging server) grant you SSH access and give you your SSH username
  - Add your SSH private key to the ssh-agent and store your passphrase in the keychain: `ssh_add -K ~/.ssh/id_rsa`
  - SSH into the virtual box: `vagrant ssh`
  - cd into the root directory of the project: `cd /var/www`
  - create a txt file with your SSH username: `echo 'username=[your SSH username]' > env.txt`
  - update the database: `./syncdb pull` (this will take a while, especially the first time)

Once you've gone through the above steps, you should only need to run `vagrant up` to boot up the virtual box. Your project should be viewable at `localhost:8080`.

It can be a good idea to periodically update the database: 
- `vagrant ssh`
- `cd /var/www && ./syncdb pull`

## Frontend

### Getting started

1. All of the frontend code lives in `html/wp-content/themes/impact/client`, so first you'll want to `cd` into that directory.
2. We are using node to run our various compiling processes for both JS and CSS. So first of all, make sure you have node installed globally on your machine.
3. Now that you have node installed, you can run `npm install`, which will install all of the packages listed in `package.json` and save them to the `node_modules` directory.
4. To start developing, run `npm run watch` from your terminal. This will watch for changes in `js/index.js` and `css/index.css` and compile and write them to `../assets/build.js` and `../assets/build.css`. You can also just run `npm run watch-css` or `npm run watch-js`. If your CSS and JS aren't compiling, check the logs from the watch script for any errors.
5. When you are done developing, run `npm run build`. This will minify and gzip your CSS and JS and make it production-ready.

### CSS
- we are using a custom build of [tachyons](http://tachyons.io/) as our css toolkit - the custom build excludes any rules related to debugging, colors, and font-families
- use flexbox over floats when possible
- avoid nesting
- avoid `important!`
- use `rem`s or `em`s over pixels when possible
- we are including a handful of postcss plugins, such as `postcss-each` (see `postcss.config.js` for a full list)
- here is an example of using `postcss-each`'s looping functionality to construct a bunch of brand color related utility classes:

```css
:root {
  --khaki: #E2E5D0; 
  --khaki-light: color(var(--khaki) l(80%));
  --green: #39f5ca;
  --orange: #F95607;
}

@each $color in (khaki, khaki-light, green, orange) {
  .bg-$(color) { background-color: var(--$(color)); }
  .hover-bg-$(color):hover { background-color: var(--$(color)); }
  .color-$(color) { color: var(--$(color)); }
  .hover-color-$(color):hover { color: var(--$(color)); }
  .border-$(color) { border-color: var(--$(color)); }
}
```

### JS
- we are using [browserify](https://github.com/browserify/browserify#usage) for requiring files
- es6 syntax is supported
- try to make your code as modular as possible

### Fonts and other assets
- fonts, UI icons and other assets should live in the `../assets` directory
- the assets path is [set in postcss](https://github.com/Mediacauseagency/wp-starter/blob/master/html/wp-content/themes/impact/client/postcss.config.js) to point to `../assets`, so when accessing assets from CSS you can just do:

```css
@font-face {
  /* we can assume that we are in '../assets' */
  src:  url('fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  font-family: 'Poppins';
}

body { font-family: 'Poppins'; }
```

### Demo
To edit the demo, run `npm run watch-demo` from the `client` folder.
The demo page uses `impact/demo.html`, `client/css/demo.css`, `client/js/demo.js`.

When you are ready to publish the demo page, follow these steps:
- `npm run build-demo`
- `cd` into `impact/gh-pages`
- if this is your first time publishing, then you'll want to:
  - `git init`
  - `git add --all`
  - `git commit -m [YOUR COMMIT MESSAGE]`
  - `git checkout -b gh-pages`
  - `git remote add origin https://github.com/mediacauseagency/[REPO NAME].git`
  - `git push -u origin gh-pages`
- otherwise, you can just
  - `git add --all`
  - `git commit -m [YOUR COMMIT MESSAGE]`
  - `git push`

Your demo page should now be viewable at `https://mediacauseagency.github.io/[REPO NAME]`.

