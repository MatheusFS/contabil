import React from 'react';


function AED_DL({ totals, operations, pb }){

    const name = "AED_DL";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Distribuições de Lucros"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default AED_DL;