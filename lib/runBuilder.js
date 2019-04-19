'use strict';

var path = require('path');
var fs = require('fs');
var builder = require('./builder');
var colors = require('colors');

module.exports = function(viewsDir, baseDir, noDebug) {
  var start = new Date();
  // scan views folder, get the assets map
  var scaned = builder.scanDir(viewsDir);
  // check duplicate target
  builder.checkTarget(scaned);
  // console.log(scaned);
  console.log(colors.magenta('Scaned.'), colors.cyan(scaned.length),
    colors.magenta('asset(s) will be build.'));
  
  // combo？md5 hash
  var minified = builder.minify(baseDir, scaned, noDebug);
  // console.log(minified);
  console.log(colors.magenta(' 🏁  Compile static assets done.'),
    colors.gray('Build time'), colors.cyan(new Date() - start),
    colors.gray('ms.'));
  
  // write the assets mapping into assets.json
  var assets = path.join(baseDir, 'assets.json');
  console.log(colors.magenta('assets.json is here: '), colors.cyan(assets));
  var map = builder.map(minified);
  fs.writeFileSync(assets, JSON.stringify(map));
  console.log(colors.magenta('write assets.json done. assets.json: '));
  console.log(colors.gray(JSON.stringify(map, null, '  ')));  
}
