import React from 'react';

import CategoryItem from '../../CategoryItem';
import DROB_ISV from './DROB_ISV';
import DROB_DDSV from './DROB_DDSV';

// import './styles.css';

function DROB({ totals, operations, pb }){

    const name = "DROB";

    return (
    <CategoryItem
        color="#660000"
        name={name}
        title="Deduções das Receitas Operacionais Brutas"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <DROB_ISV totals={totals} operations={operations}/>
            <DROB_DDSV totals={totals} operations={operations}/>
        </>
        }
    />
    )
}

export default DROB;