const IndexController = {

    async getIndexHtml(ctx) {
        return await ctx.render('www/index/index.html');
    }

};

export default IndexController;
