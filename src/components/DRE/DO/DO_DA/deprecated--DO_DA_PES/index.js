import React from 'react';
import CategoryItem from '../../../../CategoryItem';

function DO_DA_PES({ totals, operations, pb }){

    const name = "DO_DA_PES";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Pessoal"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default DO_DA_PES;