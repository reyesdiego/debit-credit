// FAKING DB

class db {

    constructor() {
        this.transactions = [];
    }
    insert(transaction) {
        const row = { ...transaction, effectiveDate: new Date() };
        this.transactions.push(row);
        return Promise.resolve(row);
    }
}

module.exports = new db();



