'use strict';
const Loader = require('../../loader');
const path = require('path');

module.exports = app => {
  const { router } = app;
  router.get('/', async ctx => {
    return await ctx.render('index.nj', {
      Loader: new Loader({
        viewdir: path.join(__dirname, './view'),
        assetsdir: path.join(__dirname, './public/assets'),
        assetsjsondir:  path.join(__dirname, './')
      })
    });
  });
};
