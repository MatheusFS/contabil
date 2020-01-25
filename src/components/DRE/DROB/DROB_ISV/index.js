import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function DROB_ISV({ totals, operations, pb }){

    const name = "DROB_ISV";

    return (
        <CategoryItem
            color="#990000"
            name={name}
            title="Impostos Sobre Vendas"
            total={totals[name]}
            operations={operations}
            pb={pb}
        />
    )
}

export default DROB_ISV;