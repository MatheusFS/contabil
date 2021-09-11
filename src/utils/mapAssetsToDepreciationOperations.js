const getDepreciationStartEndDates = require('./getDepreciationStartEndDates');
const isBetweenDates = require('./isBetweenDates');
const dateDiffInMonths = require('./dateDiffInMonths');

module.exports = function mapAssetsDepreciationToOperations(assets, search_date){

    return assets.map(asset => {
        
        const { _id, name, type, price, quantity, use_start_date, lifetime_in_months } = asset;

        const {
            depreciation_start,
            depreciation_end
        } = getDepreciationStartEndDates(use_start_date, lifetime_in_months);

        const n = dateDiffInMonths(search_date, depreciation_start)+1;

        if(isBetweenDates(search_date, depreciation_start, depreciation_end)){

            return {    
                _id,
                name: `${name} (${n}/${lifetime_in_months})`,
                category: `DA_${type}`,
                value: (price / lifetime_in_months) * quantity,
                competence_date: search_date,
                // cash_flow: []
            }
        }
    }).filter(asset => asset != null);
};