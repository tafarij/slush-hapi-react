'use strict';

const path = require('path');
const node_modules_dir = path.resolve(__dirname, '../node_modules');
const webpack = require('webpack');

let config = {
    entry: {
        app: path.resolve(__dirname, '../client/src/js/app.jsx'),
        vendors: ['jquery', 'react', 'react-dom']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../client/dist/js'),
        publicPath: '/assets/js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            exclude: [node_modules_dir],

            loader: 'babel', // The module to load. "babel" is short for "babel-loader"
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js')
    ]
};

module.exports = config;
