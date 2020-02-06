import React from 'react';
import CategoryItem from '../../../CategoryItem';

function RFL_DF({ totals, operations, pb }){

    const name = "RFL_DF";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Despesas Financeiras"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default RFL_DF;