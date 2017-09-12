'use strict';

var _zanNode = require('zan-node');

var _zanNode2 = _interopRequireDefault(_zanNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
    STATIC_PATH: '../static/local/',
    KEYS: ['your-key', 'your-secret'],
    CDN_PATH: '//b.yzcdn.cn'
};

let zan = new _zanNode2.default(config);