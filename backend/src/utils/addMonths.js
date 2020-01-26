module.exports = function addMonths(date, months){

    date = new Date(date);
    return new Date(date.setMonth(date.getMonth() + months));
};