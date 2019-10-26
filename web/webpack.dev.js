const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [new CleanWebpackPlugin()],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    { loader: 'css-modules-typescript-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'numericode',
                            },
                        },
                    },
                ],
            },
        ],
    },
});
