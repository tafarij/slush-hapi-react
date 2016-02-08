'use strict';

const Config = require('./config');

module.exports = {
    server: {},
    connections: [{
        port: Config.get('/server').port,
        routes: {
            cors: !Config.get('/production')
        }
    }],
    registrations: [{
        plugin: {
            register: 'good',
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    events: {
                        log: '*',
                        error: '*'
                    }
                }]
            }
        }
    }, {
        plugin: 'vision'
    }, {
        plugin: {
            register: 'visionary',
            options: {
                engines: {
                    jade: require('jade')
                },
                path: 'server/ui/views',
                context: {
                    isProduction: Config.get('/production')
                }
            }
        }
    }, {
        plugin: 'inert'
    }, {
        plugin: './api/routes'
    }, {
        plugin: './ui/routes'
    }]
};
