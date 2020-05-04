const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transaction-controller');

router.post('/', transactionsController.create);

module.exports = router;
