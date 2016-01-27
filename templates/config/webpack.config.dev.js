'use strict';

const webpack = require('webpack');
let config = require('./webpack.config.base.js');

config.devServer = {
    hot: true,
    inline: true,
    colors: true,
    historyApiFallback: true,
    port: 3001,
    proxy: {
        '/*': {
            target: 'http://localhost:' + require('./manifest.js').connections[0].port
        }
    }
};

config.module.loaders = config.module.loaders.concat([{
    test: /\.scss$/,
    loader: 'style!css!sass'
}]);

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
