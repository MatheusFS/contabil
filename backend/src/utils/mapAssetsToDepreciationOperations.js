const getDepreciationStartEndDates = require('./getDepreciationStartEndDates');
const isBetweenDates = require('./isBetweenDates');

module.exports = function mapAssetsToDepreciationOperations(assets, search_date){

    return assets.map(asset => {
        
        const { _id, name, value, start_date, lifetime_in_months } = asset;

        const {
            depreciation_start,
            depreciation_end
        } = getDepreciationStartEndDates(start_date, lifetime_in_months);

        if(isBetweenDates(search_date, depreciation_start, depreciation_end)){

            return {    
                _id,
                name,
                category: 'DA_D',
                value: value / lifetime_in_months,
                date: search_date
            }
        }
    }).filter(asset => asset != null);
};