import React from 'react';

import CategoryItem from '../CategoryItem';
import DO_DC from './DO_DC';
import DO_DA from './DO_DA';

// import './styles.css';

function DO({ totals, operations, pb }){

    const name = "DO";

    return (
    <CategoryItem
        color="#660000"
        name={name}
        title="Despesas Operacionais"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <DO_DC totals={totals} operations={operations}/>
            <DO_DA totals={totals} operations={operations}/>
        </>}
    />
    )
}

export default DO;