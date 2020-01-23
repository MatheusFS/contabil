import React from 'react';

import CategoryItem from '../../../CategoryItem';

// import './styles.css';

function CO_CPV_MAT({ totals, operations, pb }){

    const name = "CO_CPV_MAT";

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

export default CO_CPV_MAT;