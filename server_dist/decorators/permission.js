'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 场景3：权限校验
 */
exports.needAuth = function (role) {
    return (target, name, descriptor) => {
        const method = descriptor.value;
        descriptor.value = (() => {
            var _ref = _asyncToGenerator(function* (...args) {
                if (role === 'admin') {
                    return yield method.apply(target, args);
                } else {
                    return args[0].body = {
                        code: 100001,
                        msg: '权限不够'
                    };
                }
            });

            return function () {
                return _ref.apply(this, arguments);
            };
        })();
    };
};