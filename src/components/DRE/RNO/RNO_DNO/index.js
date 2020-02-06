import React from 'react';
import CategoryItem from '../../../CategoryItem';

function RNO_DNO({ totals, operations, pb }){

    const name = "RNO_DNO";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Despesas Não-Operacionais"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default RNO_DNO;