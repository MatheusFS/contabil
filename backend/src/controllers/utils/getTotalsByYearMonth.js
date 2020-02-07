const getOperationsPurchasesDepreciationsByYearMonth = require('./getOperationsPurchasesDepreciationsByYearMonth')

module.exports = async function getTotalsByYearMonth(year, month){

    const sub = (a, b) => (a?a:0) - (b?b:0);
    const sum = (a, b) => (a?a:0) + (b?b:0);

    const operations = await getOperationsPurchasesDepreciationsByYearMonth(year, month);

    const totals = {};

    operations.forEach(operation => {

        const pieces = operation.category.split('_');

        for(let i = 1; i <= pieces.length; i++){

            let name = operation.category.split('_', i).join('_');
            if(typeof totals[name] === 'undefined') totals[name] = 0;
            totals[name] += operation.value;
        }

    });

    totals['ROL'] = sum(totals['ROB'], totals['DROB']);
    totals['LOB'] = sum(totals['ROL'], totals['CO']);
    totals['LAJIRDA'] = sum(totals['LOB'], totals['DO']);
    totals['LAJIR'] = sum(totals['LAJIRDA'], totals['DA']);
    totals['LAIR'] = sum(totals['LAJIR'], totals['RFL']);
    totals['LOL'] = sum(totals['LAIR'], totals['CJS']);
    totals['RLE'] = sum(sum(totals['LOL'], totals['RNO']), totals['AED']);

    return totals;
}