'use strict';

var _auth = require('../policies/auth');

var _auth2 = _interopRequireDefault(_auth);

var _index = require('../controllers/index');

var _index2 = _interopRequireDefault(_index);

var _zan = require('@youzan/zan');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_zan.router.get('/', _auth2.default, _index2.default.getIndexHtml);

module.exports = _zan.router;