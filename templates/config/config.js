'use strict';

const Confidence = require('confidence');

let config = {
    $meta: 'Application configration file',
    server: {
        $filter: 'env',
        production: {
            port: process.env.port
        },
        $default: {
            port: 3000
        }
    },
    production: {
        $filter: 'env',
        production: true,
        $default: false
    }
};

let store = new Confidence.Store(config);
let criteria = {
    env: process.env.NODE_ENV
};

module.exports = {
    get: function (key) {
        return store.get(key, criteria);
    },
    meta: function (key) {
        return store.meta(key, criteria);
    }
};
