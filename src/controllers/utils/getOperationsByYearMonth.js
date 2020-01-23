const Operation = require('../../models/Operation');

module.exports = async function getOperationsByYearMonth(year, month){

    const padMonth = `000${month}`.slice(-2);

    const operations = await Operation.find({
        date: {
            $gte: new Date(`${year}-${padMonth}-01`),
            $lte: new Date(`${year}-${padMonth}-31`),
        }
    });

    return operations;
}