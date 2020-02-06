import React from 'react';
import CategoryItem from '../../../CategoryItem';

function CO_CMV({ totals, operations, pb }){

    const name = "CO_CMV";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Custos das Mercadorias Vendidas"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CO_CMV;