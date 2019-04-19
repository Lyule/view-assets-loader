/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  return {
    keys: 'keys',
    mini_assets: true,
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.nj': 'nunjucks',
      },
    },
    nunjucks: {
      // dir: 'path/to/template/dir',  // default to `{app_root}/app/view`
      cache: true, // local env is false
    },
  };
};
