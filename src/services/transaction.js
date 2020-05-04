module.exports.createTransactionEngine = ({ db }) => {

    const transaction = Transaction.bind(null, { db });
    const get = Get.bind(null, {db});

    return { transaction, get }

    async function Transaction(injections, transaction) {
        const { db } = injections;
        const { type, description, amount } = transaction;

        return await db.insert({ amount, type, description });
    }

    async function Get(injections) {
        const { db } = injections;
        return await db.find();
    }
}