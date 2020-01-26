module.exports = function normalizeYearMonthDate(year, month){

    const padMonth = `000${month}`.slice(-2);
    return new Date(`${year}-${padMonth}-01`);
};