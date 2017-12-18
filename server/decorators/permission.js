/**
 * 场景3：权限校验
 */
exports.needAuth = function(role) {
  return (target, name, descriptor) => {
    const method = descriptor.value;
    descriptor.value = async(...args) => {
      if (role === 'admin') {
        return await method.apply(target, args);
      } else {
        return args[0].body = {
          code: 100001,
          msg: '权限不够'
        };
      }
    };
  };
}
