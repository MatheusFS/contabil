import React from 'react';
import CategoryItem from '../../../CategoryItem';

function CO_CPV_MOD({ totals, operations, pb }){

    const name = "CO_CPV_MOD";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Mão de Obra Direta"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CO_CPV_MOD;