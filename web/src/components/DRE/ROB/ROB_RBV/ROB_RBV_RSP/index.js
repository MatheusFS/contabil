import React from 'react';

import CategoryItem from '../../../CategoryItem';

// import './styles.css';

function ROB_RBV_RSP({ totals, operations, pb }){

    const name = "ROB_RBV_RSP";

    return (
    <CategoryItem
        color="#6aa84f"
        name={name}
        title="Receitas dos Serviços Prestados"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default ROB_RBV_RSP;