const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './index',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'built'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        port: 3002
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        })
    ],


    watch: true
};