const getCashFlowSinceYearMonth = require('./utils/getCashFlowSinceYearMonth');

// CONTROLLER FUNCTIONS
// index, show, store, update, destroy

module.exports = {

    async sinceYearMonth(req, res){

        const { year, month } = req.params;
        
        const cash_flow = await getCashFlowSinceYearMonth(year, month);
        
        return res.json(cash_flow);
    },
}