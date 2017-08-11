import Demo1Service from '../services/demo1';
import Demo2Service from '../services/demo2';
import log from '../decorators/log';
import performance from '../decorators/performance';
import { needAuth } from '../decorators/permission';

const DemoController = {

    @log()
    @performance
    @needAuth('admin')
    async getDemoHtml(ctx) {
        return await ctx.render('www/demo/index.html');
    },

    @log()
    async findByIdJson(ctx) {
        const id = ctx.params.id;
        return ctx.body = await Demo1Service.findById(id);
    },

    async createJson(ctx) {
        const data = ctx.getPostData();
        ctx.body = await Demo1Service.create(data);
    },

    async updateByIdJson(ctx) {
        const id = ctx.params.id;
        const data = ctx.getPostData();
        ctx.body = await new Demo2Service(ctx).updateById(id, data);
    },

    async deleteByIdJson(ctx) {
        const id = ctx.params.id;
        ctx.body = await new Demo2Service(ctx).deleteById(id);
    },

    async doUpload(ctx) {
        const body = ctx.request.body;
        const files = body.files;
        // TODO
        console.log(files);
    }

};

export default DemoController;
