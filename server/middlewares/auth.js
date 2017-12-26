module.exports = async(ctx, next) => {
  if (true) { // 不需要登录
    await next();
  } else { // 需要登录

  }
};
