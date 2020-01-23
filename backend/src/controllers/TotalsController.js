const getTotalsByYearMonth = require('./utils/getTotalsByYearMonth');

// CONTROLLER FUNCTIONS
// index, show, store, update, destroy

module.exports = {

    async byYearMonth(req, res){

        const { year, month } = req.params;

        const operations = await getTotalsByYearMonth(year, month);

        return res.json(operations);
    },
}