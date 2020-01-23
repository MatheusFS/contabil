import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function RFL_RF({ totals, operations, pb }){

    const name = "RFL_RF";

    return (
    <CategoryItem
        color="#38761d"
        name={name}
        title="Receitas Financeiras"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default RFL_RF;