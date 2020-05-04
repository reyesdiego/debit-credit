module.exports.createTransactionEngine = ({ db }) => {

    const transaction = Transaction.bind(null, { db });

    return { transaction }

    function Transaction({ db }, transaction) {
        return transaction;
    }
}