const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const { resolve, appConfig } = require('./utils');

const isDevelopment = process.env.NODE_ENV === 'development';
module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: appConfig.modifyVars || {},
                                javascriptEnabled: true,
                            }
                            
                        }
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            publicPath: '../',
                            limit: 1024 * 8,
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: {
            '@': resolve('src'),
            hooks: resolve('src/hooks'),
            component: resolve('src/component'),
            utils: resolve('src/utils'),
            action: resolve('src/action'),
            pages: resolve('src/pages'),
            assets: resolve('src/asserts'),
            store: resolve('src/store'),
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
              },
              default: {
                priority: -20,
                reuseExistingChunk: true,
              },
            },
        },
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css',
        }),
        new ForkTsCheckerPlugin({
            typescript: {
                configOverwrite: {
                    compilerOptions: {
                        noUnusedLocals: false,
                    },
                },
            },
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.MK_ENV': JSON.stringify(process.env.MK_ENV),
        }),
    ].filter(Boolean),
};