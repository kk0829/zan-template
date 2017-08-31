"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Policies
 *
 * Controller 的前置层，在进入Controller 之前过滤一下；
 * 权限验证：登录校验、token 校验
 */

module.exports = (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        if (true) {
            // 不需要登录
            yield next();
        } else {// 需要登录

        }
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();