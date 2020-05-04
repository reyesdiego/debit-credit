module.exports.createTransactionEngine = ({ db }) => {

    const transaction = Transaction.bind(null, { db });

    return { transaction }

    async function Transaction(injections, transaction) {
        const { db } = injections;
        const { type, description, amount } = transaction;

        return await db.insert({ amount, type, description });
    }
}