module.exports = function dateDiffInMonths(end_date, start_date){

    const end_year_in_months = end_date.getFullYear() * 12;
    const end_month = end_date.getMonth();
    const end_in_months = end_month+end_year_in_months;
    
    const start_year_in_months = start_date.getFullYear() * 12;
    const start_month = start_date.getMonth();
    const start_in_months = start_month+start_year_in_months;

    return end_in_months-start_in_months;
}