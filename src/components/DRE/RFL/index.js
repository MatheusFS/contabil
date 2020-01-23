import React from 'react';

import CategoryItem from '../CategoryItem';
import RFL_RF from './RFL_RF';
import RFL_DF from './RFL_DF';

// import './styles.css';

function RFL({ totals, operations, pb }){

    const name = "RFL";

    return (
    <CategoryItem
        color="#7f6000"
        name={name}
        title="Resultado Financeiro Líquido"
        total={totals[name]}
         operations={operations}
        pb={pb}
        childs={
        <>
            <RFL_RF totals={totals} operations={operations}/>
            <RFL_DF totals={totals} operations={operations}/>
        </>}
    />
    )
}

export default RFL;