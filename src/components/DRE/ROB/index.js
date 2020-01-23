import React from 'react';

import CategoryItem from '../CategoryItem';
import ROB_RBV from './ROB_RBV';

// import './styles.css';

function ROB({ totals, operations, pb }){

    const name = "ROB";

    return (
    <CategoryItem
        color="#274E13"
        name={name}
        title="Receitas Operacionais Brutas"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={<ROB_RBV totals={totals} operations={operations} pb={pb}/>}
    />
    )
}

export default ROB;