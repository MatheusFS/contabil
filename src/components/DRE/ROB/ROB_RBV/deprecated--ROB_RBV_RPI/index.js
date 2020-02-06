import React from 'react';
import CategoryItem from '../../../../CategoryItem';

function ROB_RBV_RPI({ totals, operations, pb }){

    const name = "ROB_RBV_RPI";

    return (
    <CategoryItem
        color="#6aa84f"
        name={name}
        title="Receitas dos Produtos Industrializados"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default ROB_RBV_RPI;