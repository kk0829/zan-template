const IndexController = {

    async getIndexHtml(ctx) {
        return await ctx.render('pc/index/index.html');
    }

};

export default IndexController;
