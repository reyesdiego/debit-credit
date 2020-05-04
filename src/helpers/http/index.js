/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const routes = require('../../routes');

// eslint-disable-next-line max-statements
module.exports = () => {
    const app = express();
    const PORT = process.env.PORT || 3000;

    // Config
    app.disable('x-powered-by');
    app.use(cors());
    app.use(compression({ level: 1 }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // api version 1
    app.use('/api-v1', routes);

    app.on('uncaughtException', err => {
        console.error("UncaughException", err);
        process.exit(2);
    });

    app.use((req, res, next) => {
        const err = new Error('Route Not Found in API');
        err.status = 404;
        next(err);
    });

    (async () => {
        await app.listen(PORT);
        console.log(`API running on port ${PORT}. (${process.version}) pid:${
            process.pid
            } - ${new Date()}`);
    })();

    return app;
};
