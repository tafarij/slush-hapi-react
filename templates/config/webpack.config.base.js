'use strict';

const path = require('path');
const node_modules_dir = path.resolve(__dirname, '../node_modules');
const SplitByPathPlugin = require('webpack-split-by-path');

let config = {
    entry: {
        app: path.resolve(__dirname, '../client/src/js/app.jsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../client/dist/js'),
        publicPath: '/assets/js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [node_modules_dir],

            loaders: ['babel?presets[]=react,presets[]=es2015']
        }]
    },
    plugins: [
        new SplitByPathPlugin([{
            name: 'vendors',
            path: path.resolve(__dirname, '../node_modules')
        }])
    ]
};

module.exports = config;
