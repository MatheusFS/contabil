import React from 'react';

import CategoryItem from '../CategoryItem';
import AED_AC from './AED_AC';
import AED_DL from './AED_DL';

// import './styles.css';

function AED({ totals, operations, pb }){

    const name = "AED";

    return (
    <CategoryItem
        color="#7f6000"
        name={name}
        title="Aportes e Distribuições"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <AED_AC totals={totals} operations={operations}/>
            <AED_DL totals={totals} operations={operations}/>
        </>}
    />
    
    )
}

export default AED;