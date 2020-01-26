const addMonths = require('./addMonths');

module.exports = function getDepreciationStartEndDates(start_date, lifetime_in_months){


    const depreciation_start = addMonths(start_date.setDate(0), 1); 
    const depreciation_end = addMonths(
        start_date.setDate(31),
        lifetime_in_months+1
    );

    return { depreciation_start, depreciation_end };
};