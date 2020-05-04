const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transaction-controller');

router.post('/', transactionsController.create);
router.get('/', transactionsController.get);
router.get('/:id', transactionsController.getById);

module.exports = router;
