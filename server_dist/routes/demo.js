'use strict';

var _auth = require('../policies/auth');

var _auth2 = _interopRequireDefault(_auth);

var _demo = require('../controllers/demo');

var _demo2 = _interopRequireDefault(_demo);

var _zan = require('@youzan/zan');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 所有页面请求路径都以 .html 结尾，对应 Controller 方法命名规则 xxxHtml
_zan.router.get('/demo.html', _auth2.default, _demo2.default.getDemoHtml);

// 所有 JSON 接口请求路径都以 .json 结尾，对应 Controller 方法命名规则 xxxJson
_zan.router.get('/demo/todo/:id(\\d+).json', _auth2.default, _demo2.default.findByIdJson);
_zan.router.post('/demo/todo.json', _auth2.default, _demo2.default.createJson);
_zan.router.put('/demo/todo/:id(\\d+).json', _auth2.default, _demo2.default.updateByIdJson);
_zan.router.delete('/demo/todo/:id(\\d+).json', _auth2.default, _demo2.default.deleteByIdJson);

module.exports = _zan.router;