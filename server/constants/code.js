const CODE = {

  // -------------------------------
  // 通用码
  // 0 表示成功
  // -1 表示未知错误
  // -1 ~ 200 为通用错误码
  // -------------------------------
  SUCCESS: {
    code: 0,
    msg: '成功'
  },

  SUCCESS_GET: {
    code: 0,
    msg: '获取成功'
  },

  SUCCESS_POST: {
    code: 0,
    msg: '新建成功'
  },

  SUCCESS_PUT: {
    code: 0,
    msg: '更新成功'
  },

  SUCCESS_DELETE: {
    code: 0,
    msg: '删除成功'
  },

  FAIL_GET: {
    code: 100,
    msg: '获取失败'
  },

  FAIL_POST: {
    code: 101,
    msg: '新建失败'
  },

  FAIL_PUT: {
    code: 102,
    msg: '更新失败'
  },

  FAIL_DELETE: {
    code: 103,
    msg: '删除失败'
  },

  ERROR: {
    code: -1,
    msg: '未知错误'
  },

  AUTH_ERROR: {
    code: 1,
    msg: '无权限访问，用户未登录'
  },

  TOKEN_EMPTY: {
    code: 2,
    msg: '无权限访问，Token为空'
  },

  TOKEN_ERROR: {
    code: 3,
    msg: '无权限访问，Token已失效'
  },

  RECORD_NOT_FOUND: {
    code: 4,
    msg: '记录不存在'
  },

  PARAMS_ERROR: {
    code: 5,
    msg: '参数错误'
  },

  // -------------------------------
  // 自定义错误码
  // -------------------------------

};

module.exports = CODE;
