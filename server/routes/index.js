/**
 * 路由配置
 * 第一个参数：HTTP 请求方法，例如：GET/POST/PUT/DELETE
 * 第二个参数：请求路径，支持通配符、动态参数
 * 第三个参数：Controller 文件，目录可能有多个，${目录名}.${目录名}.${文件名}
 * 第四个参数：执行的方法
 */
module.exports = [
  ['GET', '/', 'index.index', 'getIndexHtml']
];
