/* eslint-disable no-undef */
const express = require('express');

module.exports = () => {

    const app = express();
    const PORT = process.env.PORT;

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
