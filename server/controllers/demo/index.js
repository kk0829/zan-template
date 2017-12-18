import { Controller } from 'zan-node';
import DemoService from '../../services/demo';
import log from '../../decorators/log';
import performance from '../../decorators/performance';
import { needAuth } from '../../decorators/permission';

class DemoController extends Controller {

  constructor(...args) {
    super(...args);
  }

  // GET /demo/index/index
  @log()
  @performance
  @needAuth('admin')
  async getIndexHtml(ctx) {
    await ctx.render('pc/demo/index.html');
  }

  // GET /demo/index/findById.json?id=${id}
  @log()
  async getFindByIdJson(ctx) {
    const id = ctx.getQueryData('id');
    return ctx.body = await new DemoService(ctx).findById(id);
  }

  // POST /demo/index/create.json
  async postCreateJson(ctx) {
    const data = ctx.getPostData();
    return ctx.body = await new DemoService(ctx).create(data);
  }

  // PUT /demo/index/updateById.json
  async putUpdateByIdJson(ctx) {
    const data = ctx.getPostData();
    ctx.body = await new DemoService(ctx).updateById(data.id, data);
  }

  // DELETE /demo/index/deleteById.json
  async deleteDeleteByIdJson(ctx) {
    const data = ctx.getPostData();
    ctx.body = await new DemoService(ctx).deleteById(data.id);
  }

}

export default DemoController;
