const Asset = require('../../models/Asset');
const normalizeYearMonthDate = require("../../utils/normalizeYearMonthDate");
const mapAssetsToDepreciationOperations = require("../../utils/mapAssetsToDepreciationOperations");

module.exports = async function getAssetsDepreciationByYearMonth(year, month){

    const search_date = normalizeYearMonthDate(year, month);

    const assets = await Asset.find();

    const operations = mapAssetsToDepreciationOperations(assets, search_date);

    return operations;
}