'use strict';

var _auth = require('../policies/auth');

var _auth2 = _interopRequireDefault(_auth);

var _demo = require('../controllers/demo');

var _demo2 = _interopRequireDefault(_demo);

var _zanNode = require('zan-node');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 所有页面请求路径都以 .html 结尾，对应 Controller 方法命名规则 xxxHtml
_zanNode.router.get('/demo.html', _auth2.default, _demo2.default.getDemoHtml);

// 所有 JSON 接口请求路径都以 .json 结尾，对应 Controller 方法命名规则 xxxJson
_zanNode.router.get('/demo/todo/:id(\\d+).json', _auth2.default, _demo2.default.findByIdJson);
_zanNode.router.post('/demo/todo.json', _auth2.default, _demo2.default.createJson);
_zanNode.router.put('/demo/todo/:id(\\d+).json', _auth2.default, _demo2.default.updateByIdJson);
_zanNode.router.delete('/demo/todo/:id(\\d+).json', _auth2.default, _demo2.default.deleteByIdJson);
_zanNode.router.post('/demo/upload', _demo2.default.doUpload);

module.exports = _zanNode.router;