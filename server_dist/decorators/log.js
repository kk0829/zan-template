'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return (target, name, descriptor) => {
        const method = descriptor.value;
        descriptor.value = (() => {
            var _ref = _asyncToGenerator(function* (...args) {
                const result = yield method.apply(target, args);
                console.log('入参：', args);
                console.log('执行上下文对象：', target);
                console.log('方法：', name);
                console.log('返回值：', result);
                return result;
            });

            return function () {
                return _ref.apply(this, arguments);
            };
        })();
    };
};

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 场景1：打印方法执行日志
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */