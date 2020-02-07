const getOperationsPurchasesDepreciationsByYearMonth = require('./getOperationsPurchasesDepreciationsByYearMonth');

module.exports = async function getCashFlowSinceYearMonth(year, month){

    const since = new Date(year, month);
    const now = new Date();

    const ops = [];

    for (since; since <= now; since.setMonth(since.getMonth() + 1)) {

        const since_year = since.getFullYear();
        const since_month = since.getMonth();

        const operations = await getOperationsPurchasesDepreciationsByYearMonth(
            since_year,
            since_month
        );

        ops.push(...operations);
    }

    const ops_cash_flow = ops.map(operation => {

        return operation.cash_flow.map(installment => {
            
            return {
                _id: installment._id,
                name: operation.name,
                date: installment.date,
                value: installment.value,
            };
        });
    }).flat();

    ops_cash_flow.sort((a,b) => new Date(b.date) - new Date(a.date));

    return ops_cash_flow;
}