module.exports.createTransactionEngine = ({ db }) => {

    const transaction = Transaction.bind(null, { db });
    const get = Get.bind(null, { db });
    const getById = GetById.bind(null, { db });

    return { transaction, get, getById };

    async function Transaction(injections, transaction) {
        const { db } = injections;
        const { type, description } = transaction;
        let { amount } = transaction;

        if (type === 'debit') {
            amount *= -1;
        }
        let balance = await db.balance();
        balance += amount;
        if (balance < 0) {
            throw new Error('Out of credit');
        }

        return await db.insert({ amount, type, description });
    }

    async function Get(injections) {
        const { db } = injections;
        return await db.find();
    }

    async function GetById(injections, id) {
        const { db } = injections;
        return await db.findById(id);
    }
};
