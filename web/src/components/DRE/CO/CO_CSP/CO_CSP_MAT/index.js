import React from 'react';
import CategoryItem from '../../../CategoryItem';

function CO_CSP_MAT({ totals, operations, pb }){

    const name = "CO_CSP_MAT";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Materiais"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CO_CSP_MAT;