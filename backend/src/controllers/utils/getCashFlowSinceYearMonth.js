const getOperationsPurchasesDepreciationsByYearMonth = require('./getOperationsPurchasesDepreciationsByYearMonth');

module.exports = async function getCashFlowSinceYearMonth(year, month){

    const since = new Date(year, month);
    const now = new Date();

    let ops = [];

    for (since; since <= now; since.setMonth(since.getMonth() + 1)) {

        const since_year = since.getFullYear();
        const since_month = since.getMonth();

        const operations = await getOperationsPurchasesDepreciationsByYearMonth(
            since_year,
            since_month
        );

        ops.push(...operations);
    }

    ops = ops.map(operation => {
        console.log(operation);
        return operation.cash_flow.map(installment => {
            
            return {
                _id: installment._id,
                name: operation.name,
                date: installment.date,
                value: installment.value,
            };
        });
    }).flat();

    ops.sort((a,b) => new Date(b.date) - new Date(a.date));

    const actual = ops.reduce((prev, curr) => prev + curr.value, 0);

    return {
        actual,
        ops
    };
}