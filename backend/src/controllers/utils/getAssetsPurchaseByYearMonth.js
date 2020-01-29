const Asset = require('../../models/Asset');
const normalizeYearMonthDate = require("../../utils/normalizeYearMonthDate");

module.exports = async function getAssetsPurchaseByYearMonth(year, month){

    const purchase_date = normalizeYearMonthDate(year, month);

    const assets = await Asset.find({ purchase_date });

    return assets;
}