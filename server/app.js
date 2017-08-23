import Zan from 'zan-node';
import middlewares from './middlewares';

/**
 * CDN_PATH 静态资源 CDN 域名
 * VERSION_LIST version 文件配置列表
 */
const config = {
    SERVER_ROOT: __dirname,
    NODE_PORT: 8201,
    STATIC_PATH: '../static/local/',
    KEYS: ['your-key', 'your-secret'],
    CDN_PATH: '//b.yzcdn.cn',
    VERSION_LIST: [
        './config/version_css.json',
        './config/version_h5_css.json',
        './config/version_js.json',
        './config/version_h5_js.json'
    ],
    beforeLoadMiddlewares() {
        this.middlewares.push({
            name: 'fail',
            fn: middlewares.fail
        });
    }
};

let zan = new Zan(config);