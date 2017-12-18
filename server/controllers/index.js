import { Controller } from 'zan-node';

class IndexController extends Controller {
  constructor(...args) {
    super(...args);
  }

  async getIndexHtml(ctx) {
    return await ctx.render('pc/index/index.html');
  }
}

export default IndexController;
