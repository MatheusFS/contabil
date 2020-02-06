import React from 'react';

function CJS_IR({ totals, operations, pb }){

    const name = "CJS_IR";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Impostos de Renda"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CJS_IR;