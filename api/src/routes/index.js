const express = require('express');
const router = express.Router();
const transactionController = require('./transaction-routes');

router.route('/').get((req, res) => {
    res.send({ hi: 'there' });
});

router.use('/transactions', transactionController);

module.exports = router;
