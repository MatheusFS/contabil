import React from 'react';

import CategoryItem from '../../CategoryItem';

function DA_D({ totals, operations, pb }){

    const name = "DA_D";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Depreciações"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default DA_D;