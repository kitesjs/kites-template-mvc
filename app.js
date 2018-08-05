'use strict'
const kites = require('kites');

/**
 * Init kites
 */
module.exports = kites({
        loadConfig: true,
        discover: true
    })
    .use(require('./content/extensions/detectEnv'))
    .use(require('./content/extensions/nativeModel'))
    .use(require('./content/extensions/configRoutes'))
    .init()
    .then(function (kites) {
        kites.logger.info('Info: Web Server is Ready!!!')
        // return kites for testing.
        return kites;
    })
    .catch(function (e) {
        console.error(e.stack);
        process.exit(1);
    });
