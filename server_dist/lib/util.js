'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NODE_ENV = process.env.NODE_ENV;
const envPath = `../config/config.${NODE_ENV}.js`;
const commonConfig = require('../config/common.js');
const envConfig = require(envPath);
const obj = _lodash2.default.defaultsDeep({}, envConfig, commonConfig);

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