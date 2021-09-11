const getOperationsByYearMonth = require('./getOperationsByYearMonth');
const getAssetsPurchaseByYearMonth = require('./getAssetsPurchaseByYearMonth');
const getAssetsDepreciationByYearMonth = require('./getAssetsDepreciationByYearMonth');

module.exports = async function (year, month){

    const operations = await getOperationsByYearMonth(year, month);
    const purchases = await getAssetsPurchaseByYearMonth(year, month);
    const depreciations = await getAssetsDepreciationByYearMonth(year, month);

    if(purchases) operations.push(...purchases);
    if(depreciations) operations.push(...depreciations);

    return operations;
}