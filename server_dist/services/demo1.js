'use strict';

var _dec, _desc, _value, _obj; /**
                                * Service 层写法1
                                */


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

const DemoService = (_dec = (0, _log2.default)(), (_obj = {
    findById(id) {
        return _asyncToGenerator(function* () {
            return {
                code: 0,
                msg: 'ok',
                data: {
                    id: 1,
                    title: 'todo title',
                    description: 'todo description'
                }
            };
        })();
    },

    create(data) {
        return _asyncToGenerator(function* () {
            return {
                code: 0,
                msg: '新建成功',
                data: {
                    id: 2,
                    title: 'new todo title',
                    description: 'new todo description'
                }
            };
        })();
    }

}, (_applyDecoratedDescriptor(_obj, 'findById', [_dec], Object.getOwnPropertyDescriptor(_obj, 'findById'), _obj)), _obj));

module.exports = DemoService;