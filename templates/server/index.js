'use strict';

const Glue = require('glue');
const manifest = require('../config/manifest');

let options = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, function (err, server) {
    if (err) {
        console.log(err);
        return;
    }

    server.start(function (err) {
        if (err) {
            console.log(err);
        } else {
            server.log(['info', 'startup'], 'Server running at ' + server.info.uri);
        }
    });
});
