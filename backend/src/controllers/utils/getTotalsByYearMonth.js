const Operation = require('../../models/Operation');

module.exports = async function getOperationsByYearMonth(year, month){

    function sub(a, b){

        return (a?a:0) - (b?b:0);
    }

    const padMonth = `000${month}`.slice(-2);

    const operations = await Operation.find({
        date: {
            $gte: new Date(`${year}-${padMonth}-01`),
            $lte: new Date(`${year}-${padMonth}-31`),
        }
    });

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
    totals['LAJIR'] = sub(totals['LOB'], totals['DO']);
    totals['LAIR'] = sub(totals['LAJIR'], totals['RFL']);
    totals['LOL'] = sub(totals['LAIR'], totals['CJS']);
    totals['RLE'] = sub(sub(totals['LOL'], totals['RNO']), totals['AED']);

    return totals;
}