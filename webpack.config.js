const { merge } = require('webpack-merge');

// pc端还是移动端配置
module.exports = ({ WEBPACK_SERVE, MK_ENV }) => {
    console.log('环境变量', WEBPACK_SERVE, MK_ENV);
    const NODE_ENV = WEBPACK_SERVE ? 'development' : 'production'; // 设置环境变量
    process.env.NODE_ENV = NODE_ENV;
    process.env.MK_ENV = MK_ENV || 'prod';
    const commonConfig = require('./build/webpack.common.js');
    const envConfig = require(`./build/webpack.${NODE_ENV}.js`); // 引入开发环境或生产环境配置

    return merge(
        commonConfig,
        envConfig,
    );
};
