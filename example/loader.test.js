const Loader = require('../loader');
const path = require('path');

const loader = new Loader({
  viewdir: path.join(__dirname, './views'),
  assetsdir: path.join(__dirname, './public'),
  assetsjsondir:  path.join(__dirname, './')
})
