'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Controller = require('../base/controller');

let IndexController = class IndexController extends Controller {

  getIndexHtml(ctx) {
    return _asyncToGenerator(function* () {
      return yield ctx.render('index/index.html');
    })();
  }

};


module.exports = IndexController;