module.exports = function filterCashFlow(cash_flow) {
    
    return cash_flow.filter(installment => {

        const { date, value } = installment;
        return date != "" && value > 0
    })
};