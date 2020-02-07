const addMonths = require('../../utils/addMonths');

module.exports = function getDepreciationStartEndDates(use_start_date, lifetime_in_months){


    const depreciation_start = addMonths(use_start_date.setDate(0), 1); 
    const depreciation_end = addMonths(
        use_start_date.setDate(31),
        lifetime_in_months
    );

    return { depreciation_start, depreciation_end };
};