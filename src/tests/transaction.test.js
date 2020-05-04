const expect = require('chai').expect;

const { createTransactionEngine } = require('../services/transaction');

describe('TRANSACTIONS', function () {
    it('Should Pass (dummy test)', function () {
        expect(1).to.eq(1);
    })
    it('should insert Debit Transaction', async function () {
        const db = {
            insert: transaction => {
                expect(transaction).to.haveOwnProperty('amount');
                expect(transaction).to.haveOwnProperty('type');
                expect(transaction).to.haveOwnProperty('description');
                return Promise.resolve(transaction);

            }
        }
        const transaction = {
            amount: 10,
            type: 'debit',
            description: 'Rent'
        };
        const transactionEngine = createTransactionEngine({ db });
        const response = await transactionEngine.transaction(transaction);
        expect(response).to.haveOwnProperty('amount', transaction.amount);

    })
});