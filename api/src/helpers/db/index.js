/* eslint-disable no-return-assign */
// FAKING DB
const { v4: uuidv4 } = require('uuid');

class db {

    constructor() {
        this.transactions = [];
    }

    insert(transaction) {
        const row = { ...transaction, id: uuidv4(), effectiveDate: new Date() };
        this.transactions.push(row);
        return Promise.resolve(row);
    }

    find() {
        return Promise.resolve(this.transactions.sort((pre, next) => pre.effectiveDate < next.effectiveDate));
    }

    findById(id) {
        return Promise.resolve(this.transactions.find(item => item.id === id));
    }

    async balance(params) {
        const transactions = await this.find(params);
        // eslint-disable-next-line no-param-reassign
        return transactions.reduce((acu, val) => acu += val.amount, 0);
    }
}

module.exports = new db();
