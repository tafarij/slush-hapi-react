'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let config = require('./webpack.config.base.js');

config.debug = false;
config.profile = false;

config.output.filename = '[name].min.js';

config.module.loaders = config.module.loaders.concat([{
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css?minimize!sass', {
        publicPath: '/assets/css'
    })
}]);

config.plugins = config.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('../css/[name].min.css'),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        output: {
            comments: false
        },
        compress: {
            warnings: false,
            screw_ie8: true
        }
    })
]);

module.exports = config;
