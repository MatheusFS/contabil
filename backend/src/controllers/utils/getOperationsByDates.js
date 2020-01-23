const Operation = require('../../models/Operation');

module.exports = async function getOperationsByDates(start_date, end_date){

    const operations = await Operation.find({
        date: {
            $gte: new Date(start_date),
            $lte: new Date(end_date),
        }
    });

    return operations;
}