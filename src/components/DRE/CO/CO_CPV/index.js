import React from 'react';

import CategoryItem from '../../CategoryItem';
import CO_CPV_MP from './CO_CPV_MP';
import CO_CPV_MOD from './CO_CPV_MOD';
import CO_CPV_CIF from './CO_CPV_CIF';

// import './styles.css';

function CO_CPV({ totals, operations, pb }){

    const name = "CO_CPV";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Custos dos Produtos Vendidos"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CO_CPV_MP totals={totals} operations={operations}/>
            <CO_CPV_MOD totals={totals} operations={operations}/>
            <CO_CPV_CIF totals={totals} operations={operations}/>
        </>
        }
    />
    )
}

export default CO_CPV;