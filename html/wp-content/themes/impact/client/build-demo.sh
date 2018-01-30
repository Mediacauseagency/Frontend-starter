#!/bin/bash

echo "building js..."
npm run build-demo-js
echo "building css..."
npm run build-css
echo "removing gh-pages folder..."
(rm -rf ../gh-pages) 
echo "making gh-pages folder..."
mkdir -p ../gh-pages 
mkdir -p ../gh-pages/assets
echo "copying files into gh-pages folder..."
cp -r ../assets/* ../gh-pages/assets 
(rm ../gh-pages/assets/build.js)
(rm ../gh-pages/assets/build.js.gz)
cp ../demo.html ../gh-pages/index.html

echo "done. now cd into ../gh-pages and push to the gh-pages branch"
