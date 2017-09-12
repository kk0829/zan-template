import Zan from 'zan-node';

const config = {
    STATIC_PATH: '../static/local/',
    KEYS: ['your-key', 'your-secret'],
    CDN_PATH: '//b.yzcdn.cn'
};

let zan = new Zan(config);