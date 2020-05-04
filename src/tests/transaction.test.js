/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
const chai = require('chai');
const expect = require('chai').expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const { createTransactionEngine } = require('../services/transaction');

describe('TRANSACTIONS', function () {
    it('Should Pass (dummy test)', function () {
        expect(1).to.eq(1);
    });

    it('insert transaction Debit should return Out of credit', async function () {
        const transaction = {
            amount: 10,
            description: 'Rent',
            type: 'debit'
        };
        const db = {
            insert: transaction => {
                expect(transaction).to.haveOwnProperty('amount');
                expect(transaction).to.haveOwnProperty('type');
                expect(transaction).to.haveOwnProperty('description');
                return Promise.resolve(transaction);
            },
            balance: () => {
                return Promise.resolve(0);
            }
        };
        const balance = createTransactionEngine({ db });
        await expect(balance.transaction(transaction)).to.be.rejected;

    });

    it('should insert Credit Transaction', async function () {
        const db = {
            insert: transaction => {
                expect(transaction).to.haveOwnProperty('amount');
                expect(transaction).to.haveOwnProperty('type');
                expect(transaction).to.haveOwnProperty('description');
                return Promise.resolve(transaction);

            },
            balance: () => {
                return Promise.resolve(0);
            }
        };
        const transaction = {
            amount: 1000,
            type: 'creadit',
            description: 'Salary'
        };
        const transactionEngine = createTransactionEngine({ db });
        const response = await transactionEngine.transaction(transaction);
        expect(response).to.haveOwnProperty('amount', transaction.amount);
        expect(response).to.haveOwnProperty('type', transaction.type);
        expect(response).to.haveOwnProperty('description', transaction.description);

    });

    it('Should get Transactions', async function () {
        const transactions = [
            {
                amount: -10,
                description: 'Rent',
                type: 'debit'
            }
        ];
        const db = {
            find: () => {
                return Promise.resolve(transactions);
            }
        };
        const transactionEngine = createTransactionEngine({ db });
        const response = await transactionEngine.get();
        expect(response).to.have.length(1);
        expect(response[0]).to.haveOwnProperty('type', transactions[0].type);
        expect(response[0]).to.haveOwnProperty('description', transactions[0].description);
        expect(response[0]).to.haveOwnProperty('amount', transactions[0].amount);
    });

    it('Should get Transaction By Id', async function () {
        const transaction = {
            id: '123455',
            amount: -10,
            description: 'Rent',
            type: 'debit',
            effectiveDate: new Date()
        };
        const db = {
            findById: id => {
                expect(id).to.eq(transaction.id);
                return Promise.resolve(transaction);
            }
        };
        const transactionEngine = createTransactionEngine({ db });
        const response = await transactionEngine.getById(transaction.id);
        expect(response).to.haveOwnProperty('id', transaction.id);
        expect(response).to.haveOwnProperty('amount', transaction.amount);
        expect(response).to.haveOwnProperty('type', transaction.type);
        expect(response).to.haveOwnProperty('effectiveDate', transaction.effectiveDate);
    });
});
