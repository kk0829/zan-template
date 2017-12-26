"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 场景2：统计方法执行时间
 */
module.exports = (target, name, descriptor) => {
  const method = descriptor.value;
  descriptor.value = (() => {
    var _ref = _asyncToGenerator(function* (...args) {
      const t1 = Date.now();
      const result = yield method.apply(target, args);
      const t2 = Date.now();
      console.log(`方法 ${name} 执行时间：${t2 - t1}`);
      return result;
    });

    return function () {
      return _ref.apply(this, arguments);
    };
  })();
};