const formatNumber = require('format-number');

const formattedCurrency = number =>
    formatNumber({
        prefix: '$',
        integerSeparator: '.',
        padRight: 2,
        round: 2,
        decimal: ',',
        suffix: ''
    })(number);

export { formattedCurrency }
