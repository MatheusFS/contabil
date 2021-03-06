import React from 'react';
import CategoryItem from '../../../CategoryItem';

function DROB_DDSV({ totals, operations, pb }){

    const name = "DROB_DDSV";

    return (
        <CategoryItem
            color="#990000"
            name={name}
            title="Devoluções e Descontos Sobre Vendas"
            total={totals[name]}
            operations={operations}
            pb={pb}
        />
    )
}

export default DROB_DDSV;