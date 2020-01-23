const Operation = require('../../models/Operation');

module.exports = async function getOperationsByMonth(month){

    const now = new Date(Date.now());
    const dates = {
      start: `${now.getFullYear()}-${month}-01`,
      end: `${now.getFullYear()}-${month}-31`
    };

    const operations = await Operation.find({
        date: {
            $gte: new Date(dates.start),
            $lte: new Date(dates.end),
        }
    });

    return operations;
}