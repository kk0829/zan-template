const Controller = require('../base/controller');

class IndexController extends Controller {

  async getIndexHtml(ctx) {
    return await ctx.render('index/index.html');
  }

}

module.exports = IndexController;
