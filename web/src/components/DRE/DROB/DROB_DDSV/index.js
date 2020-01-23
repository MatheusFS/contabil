import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function DROB_DDSV({ totals, operations, pb }){

    const name = "DROB_DDSV";

    return (
        <CategoryItem
            color="#990000"
            title="Devoluções e Descontos Sobre Vendas"
            total={totals[name]}
            operations={operations}
            pb={pb}
        />
    )
}

export default DROB_DDSV;