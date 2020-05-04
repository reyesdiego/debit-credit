const expect = require('chai').expect;

const { createTransactionEngine } = require('../services/transaction');

describe('TRANSACTIONS', function () {
    it('Should Pass (dummy test)', function () {
        expect(1).to.eq(1);
    })
    it('should insert Debit Transaction', function () {
        const transactionEngine = createTransactionEngine();
        const transaction = {
            amount: 10,
            type: 'debit'
        };
        transactionEngine.transaction(transaction);
    })
});