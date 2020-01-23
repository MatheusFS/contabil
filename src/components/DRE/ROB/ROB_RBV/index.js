import React from 'react';

import CategoryItem from '../../CategoryItem';
import ROB_RBV_RMV from './ROB_RBV_RMV';
import ROB_RBV_RPI from './ROB_RBV_RPI';
import ROB_RBV_RSP from './ROB_RBV_RSP';

// import './styles.css';

function ROB_RBV({ totals, operations, pb }){

    const name = "ROB_RBV";

    return (
    <CategoryItem
        color="#38761d"
        name={name}
        title="Receitas Brutas de Vendas"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
            <>
            <ROB_RBV_RMV totals={totals} operations={operations} pb={pb}/>
            <ROB_RBV_RPI totals={totals} operations={operations} pb={pb}/>
            <ROB_RBV_RSP totals={totals} operations={operations} pb={pb}/>
            </>
        }
    />
    )
}

export default ROB_RBV;