const expect = require('chai').expect;

const { createTransactionEngine } = require('../services/transaction');

describe('TRANSACTIONS', function () {
    it('Should Pass (dummy test)', function () {
        expect(1).to.eq(1);
    })
    it('should insert Debit Transaction', function () {
        const db = {
            insert: transaction => {

            }
        }
        const transaction = {
            amount: 10,
            type: 'debit'
        };
        const transactionEngine = createTransactionEngine({ db });
        const response = transactionEngine.transaction(transaction);
        expect(response).to.haveOwnProperty('amount', transaction.amount);

    })
});