'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _dec2, _dec3, _desc, _value, _class;

var _zanNode = require('zan-node');

var _demo = require('../../services/demo');

var _demo2 = _interopRequireDefault(_demo);

var _log = require('../../decorators/log');

var _log2 = _interopRequireDefault(_log);

var _performance = require('../../decorators/performance');

var _performance2 = _interopRequireDefault(_performance);

var _permission = require('../../decorators/permission');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

let DemoController = (_dec = (0, _log2.default)(), _dec2 = (0, _permission.needAuth)('admin'), _dec3 = (0, _log2.default)(), (_class = class DemoController extends _zanNode.Controller {

    constructor(...args) {
        super(...args);
    }

    // GET /demo/index/index

    getIndexHtml(ctx) {
        return _asyncToGenerator(function* () {
            yield ctx.render('pc/demo/index.html');
        })();
    }

    // GET /demo/index/findById.json?id=${id}

    getFindByIdJson(ctx) {
        return _asyncToGenerator(function* () {
            const id = ctx.getQueryData('id');
            return ctx.body = yield new _demo2.default(ctx).findById(id);
        })();
    }

    // POST /demo/index/create.json
    postCreateJson(ctx) {
        return _asyncToGenerator(function* () {
            const data = ctx.getPostData();
            return ctx.body = yield new _demo2.default(ctx).create(data);
        })();
    }

    // PUT /demo/index/updateById.json
    putUpdateByIdJson(ctx) {
        return _asyncToGenerator(function* () {
            const data = ctx.getPostData();
            ctx.body = yield new _demo2.default(ctx).updateById(data.id, data);
        })();
    }

    // DELETE /demo/index/deleteById.json
    deleteDeleteByIdJson(ctx) {
        return _asyncToGenerator(function* () {
            const data = ctx.getPostData();
            ctx.body = yield new _demo2.default(ctx).deleteById(data.id);
        })();
    }

}, (_applyDecoratedDescriptor(_class.prototype, 'getIndexHtml', [_dec, _performance2.default, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'getIndexHtml'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getFindByIdJson', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'getFindByIdJson'), _class.prototype)), _class));
exports.default = DemoController;