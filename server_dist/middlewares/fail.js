'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { BusinessError, ParamsError } = require('zan-node');

module.exports = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    try {
      yield next();
    } catch (e) {
      if (e instanceof BusinessError) {
        console.log(e.errorContent);
        // TODO
      } else if (e instanceof ParamsError) {
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