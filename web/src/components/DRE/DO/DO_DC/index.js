import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function DO_DC({ totals, operations, pb }){

    const name = "DO_DC";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Despesas Comerciais"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default DO_DC;