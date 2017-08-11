'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dec, _desc, _value, _obj;

var _demo = require('../services/demo1');

var _demo2 = _interopRequireDefault(_demo);

var _demo3 = require('../services/demo2');

var _demo4 = _interopRequireDefault(_demo3);

var _log = require('../decorators/log');

var _log2 = _interopRequireDefault(_log);

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

const DemoController = (_dec = (0, _log2.default)(), (_obj = {

    getDemoHtml(ctx) {
        return _asyncToGenerator(function* () {
            return yield ctx.render('www/demo/index.html');
        })();
    },

    findByIdJson(ctx) {
        return _asyncToGenerator(function* () {
            const id = ctx.params.id;
            return ctx.body = yield _demo2.default.findById(id);
        })();
    },

    createJson(ctx) {
        return _asyncToGenerator(function* () {
            const data = ctx.getPostData();
            ctx.body = yield _demo2.default.create(data);
        })();
    },

    updateByIdJson(ctx) {
        return _asyncToGenerator(function* () {
            const id = ctx.params.id;
            const data = ctx.getPostData();
            ctx.body = yield new _demo4.default(ctx).updateById(id, data);
        })();
    },

    deleteByIdJson(ctx) {
        return _asyncToGenerator(function* () {
            const id = ctx.params.id;
            ctx.body = yield new _demo4.default(ctx).deleteById(id);
        })();
    },

    doUpload(ctx) {
        return _asyncToGenerator(function* () {
            const body = ctx.request.body;
            const files = body.files;
            console.log(files);
            console.log(files['test.jpg']);
            console.log(files['test.jpg'].path);
        })();
    }

}, (_applyDecoratedDescriptor(_obj, 'findByIdJson', [_dec], Object.getOwnPropertyDescriptor(_obj, 'findByIdJson'), _obj)), _obj));

exports.default = DemoController;