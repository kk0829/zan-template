/**
 * Policies
 *
 * Controller 的前置层，在进入Controller 之前过滤一下；
 * 权限验证：登录校验、token 校验
 */
module.exports = async(ctx, next) => {
    // TODO 添加权限校验逻辑
    await next();
};
