import React from 'react';
import CategoryItem from '../../../CategoryItem';

function CO_CSP_MO({ totals, operations, pb }){

    const name = "CO_CSP_MO";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Mão de Obra"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CO_CSP_MO;