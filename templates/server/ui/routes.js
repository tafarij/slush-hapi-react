'use strict';

module.exports.register = function (server, options, next) {
    let routes = [{
        path: '/assets/{param*}',
        method: 'GET',
        handler: {
            directory: {
                path: 'client/dist'
            }
        }
    }, {
        path: '/',
        method: 'GET',
        handler: function (request, reply) {
            reply.view('index', {
                page: {
                    title: 'Welcome'
                }
            });
        }
    }];

    server.route(routes);
    next();
};

module.exports.register.attributes = {
    name: 'ui.routes'
};
