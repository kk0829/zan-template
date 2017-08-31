module.exports = async(ctx, next) => {
	ctx.setGlobal('appinfo', {
		name: 'zan-template'
	});
	await next();
};