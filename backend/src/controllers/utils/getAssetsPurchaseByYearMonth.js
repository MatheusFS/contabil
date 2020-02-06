const Asset = require('../../models/Asset');
const getMonthStartEndDates = require('../../utils/getMonthStartEndDates');

module.exports = async function getAssetsPurchaseByYearMonth(year, month){

    const { start, end } = getMonthStartEndDates(year, month);

    const assets = await Asset.find({
        purchase_date: { $gte: start, $lte: end, }
    });

    const operations = assets.map(asset => {
        
        const { _id, name, cash_flow, price, quantity, purchase_date } = asset;

        return {    
            _id,
            name,
            cash_flow,
            category: `DO_DA_DGA`,
            value: price * quantity,
            competence_date: purchase_date
        }
    });

    return operations;
}