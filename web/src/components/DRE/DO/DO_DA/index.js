import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function DO_DA({ totals, operations, pb }){

    const name = "DO_DA";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Despesas Administrativas"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default DO_DA;