'use strict';

var _global2 = require('./_global');

var _global3 = _interopRequireDefault(_global2);

var _auth = require('../policies/auth');

var _auth2 = _interopRequireDefault(_auth);

var _fail = require('./fail');

var _fail2 = _interopRequireDefault(_fail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = [_global3.default, _auth2.default, _fail2.default];