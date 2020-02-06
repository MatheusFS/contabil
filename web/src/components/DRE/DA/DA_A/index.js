import React from 'react';

function DA_A({ totals, operations, pb }){

    const name = "DA_A";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Amortizações"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default DA_A;