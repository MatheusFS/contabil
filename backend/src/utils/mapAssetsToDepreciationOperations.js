const getDepreciationStartEndDates = require('./getDepreciationStartEndDates');
const isBetweenDates = require('./isBetweenDates');
const dateDiffInMonths = require('./dateDiffInMonths');

module.exports = function mapAssetsToDepreciationOperations(assets, search_date){

    return assets.map(asset => {
        
        const { _id, name, value, quantity, use_start_date, lifetime_in_months } = asset;

        const {
            depreciation_start,
            depreciation_end
        } = getDepreciationStartEndDates(use_start_date, lifetime_in_months);

        const depreciation_installment = dateDiffInMonths(search_date, depreciation_start)+1;

        if(isBetweenDates(search_date, depreciation_start, depreciation_end)){

            return {    
                _id,
                name: `${name} (${depreciation_installment}/${lifetime_in_months})`,
                category: 'DA_D',
                value: (value / lifetime_in_months) * quantity,
                competence_date: search_date
            }
        }
    }).filter(asset => asset != null);
};