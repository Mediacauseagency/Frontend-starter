#!/bin/bash

echo "building js..."
npm run build-demo-js
echo "building css..."
npm run build-css
echo "making gh-pages folder if it doesn't exist..."
mkdir -p ../gh-pages 
echo "cleaning gh-pages folder..."
(rm  -rf ../gh-pages/assets)
(rm  ../gh-pages/index.html)
mkdir ../gh-pages/assets
echo "copying files into gh-pages folder..."
cp -r ../assets/* ../gh-pages/assets 
(rm ../gh-pages/assets/build.*)
cp ../demo.html ../gh-pages/index.html

echo "done. now cd into ../gh-pages and push to the gh-pages branch"
