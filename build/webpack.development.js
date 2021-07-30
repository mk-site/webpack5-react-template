const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { launchEditorMiddleware } = require('react-dev-inspector/plugins/webpack');
const { resolve, host, appConfig } = require('./utils');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
        publicPath: '/',
        path: resolve('dist'),
        filename: `js/[name].[fullhash:8].js`,
        chunkFilename: 'js/[name].[chunkhash:8].js',
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    externals: {},
    devServer: {
        before: (app) => {
            app.use(launchEditorMiddleware)
        },
        publicPath: '/',
        host,
        disableHostCheck: true,
        contentBase: resolve('dist'),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('./public/index-dev.html'),
        })
    ]
}