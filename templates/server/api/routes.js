'use strict';

module.exports.register = function (server, options, next) {
    let routes = [{
        path: '/api/status',
        method: 'GET',
        handler: function (request, reply) {
            reply({
                status: 'Everyting irie, man! Everyting nice!'
            });
        }
    }];

    server.route(routes);
    next();
};

module.exports.register.attributes = {
    name: 'api.routes'
};
