import React from 'react';

function CJS_CS({ totals, operations, pb }){

    const name = "CJS_CS";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Contribuições Sociais"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CJS_CS;