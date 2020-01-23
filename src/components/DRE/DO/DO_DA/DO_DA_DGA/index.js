import React from 'react';

import CategoryItem from '../../../CategoryItem';

// import './styles.css';

function DO_DA_DGA({ totals, operations, pb }){

    const name = "DO_DA_DGA";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Despesas Gerais Administrativas"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default DO_DA_DGA;