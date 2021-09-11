const getOperationsPurchasesDepreciationsByYearMonth = require('./getOperationsPurchasesDepreciationsByYearMonth')

module.exports = async function getTotalsByYearMonth(year, month){

    const sub = (a, b) => (a?a:0) - (b?b:0);

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

    totals['ROL'] = sub(totals['ROB'], totals['DROB']);
    totals['LOB'] = sub(totals['ROL'], totals['CO']);
    totals['LAJIRDA'] = sub(totals['LOB'], totals['DO']);
    totals['LAJIR'] = sub(totals['LAJIRDA'], totals['DA']);
    totals['LAIR'] = sub(totals['LAJIR'], totals['RFL']);
    totals['LOL'] = sub(totals['LAIR'], totals['CJS']);
    totals['RLE'] = sub(sub(totals['LOL'], totals['RNO']), totals['AED']);

    return totals;
}