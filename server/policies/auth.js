/**
 * Policies
 *
 * Controller 的前置层，在进入Controller 之前过滤一下；
 * 权限验证：登录校验、token 校验
 */

module.exports = async(ctx, next) => {
  if (true) { // 不需要登录
    await next();
  } else { // 需要登录

  }
};
