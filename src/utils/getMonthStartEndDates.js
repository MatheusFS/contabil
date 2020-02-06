module.exports = function getMonthStartEndDates(year, month){

    return { 
        start: new Date(year, month-1, 01, 0, 0, 000),
        end: new Date(year, month, -1, 23, 59, 999)
     };
};