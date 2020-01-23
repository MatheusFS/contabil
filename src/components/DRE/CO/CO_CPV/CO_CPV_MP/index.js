import React from 'react';

import CategoryItem from '../../../CategoryItem';

// import './styles.css';

function CO_CPV_MP({ totals, operations, pb }){

    const name = "CO_CPV_MP";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Matéria Prima"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CO_CPV_MP;