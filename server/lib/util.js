const lodash = require('lodash');
const NODE_ENV = process.env.NODE_ENV;
const envPath = `../config/config.${NODE_ENV}.js`;
const commonConfig = require('../config/config.default.js');
const envConfig = require(envPath);
const obj = lodash.defaultsDeep({}, envConfig, commonConfig);

const Util = {

  getConfig(name) {
    let arr = name.split('.');
    let result = obj;
    let i = 0;
    while (arr[i]) {
      result = result[arr[i]];
      i++;
    }
    return result;
  }

};

module.exports = Util;
