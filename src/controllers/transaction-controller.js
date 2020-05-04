const db = require('../helpers/db');
const { createTransactionEngine } = require('../services/transaction-service');

const transactionEngine = createTransactionEngine({ db });

module.exports.create = async (req, res) => {
    try {
        res.send(await transactionEngine.transaction({ ...req.body }));
    } catch (err) {
        let statusCode = 500;
        if (err.message === 'Out of credit') {
            statusCode = 409;
        }
        res.status(statusCode).send(err.message);
    }
};

module.exports.get = async (req, res) => {
    let result = [];

    const { limit, begin, end } = req.query;
    try {
        if (Object.keys(req.query).length) {
            result = await transactionEngine.get({ limit, begin, end });
        }
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.getById = async (req, res) => {
    try {
        res.send(await transactionEngine.getById(req.params.id));
    } catch (err) {
        res.status(500).send(err.message);
    }
};


