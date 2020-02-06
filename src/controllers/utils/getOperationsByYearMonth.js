const Operation = require('../../models/Operation');
const getMonthStartEndDates = require('../../utils/getMonthStartEndDates');

module.exports = async function getOperationsByYearMonth(year, month){

    const { start, end } = getMonthStartEndDates(year, month);

    const operations = await Operation.find({
        competence_date: { $gte: start, $lte: end, }
    });

    return operations;
}