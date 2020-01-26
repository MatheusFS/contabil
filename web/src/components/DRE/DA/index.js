import React from 'react';

import CategoryItem from '../CategoryItem';
import DA_D from './DA_D';
import DA_A from './DA_A';

function DA({ totals, operations, pb }){

    const name = "DA";

    return (
    <CategoryItem
        color="#660000"
        name={name}
        title="Depreciações e Amortizações"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <DA_D totals={totals} operations={operations}/>
            <DA_A totals={totals} operations={operations}/>
        </>}
    />
    )
}

export default DA;