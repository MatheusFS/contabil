import React from 'react';
import CategoryItem from '../../../CategoryItem';

function CO_CPV_CIF({ totals, operations, pb }){

    const name = "CO_CPV_CIF";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Custos Indiretos de Fabricação"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CO_CPV_CIF;