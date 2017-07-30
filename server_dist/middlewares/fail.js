'use strict';

var _zan = require('@youzan/zan');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        try {
            yield next();
        } catch (e) {
            if (e instanceof _zan.BusinessError) {
                console.log(e.errorContent);
                // TODO
            } else if (e instanceof _zan.ParamsError) {
                console.log(e.errorContent);
                // TODO
            } else {
                throw new Error(e);
            }
        }
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();