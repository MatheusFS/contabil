import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function RNO_RNO({ totals, operations, pb }){

    const name = "RNO_RNO";

    return (
    <CategoryItem
        color="#38761d"
        name={name}
        title="Receitas Não-Operacionais"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default RNO_RNO;