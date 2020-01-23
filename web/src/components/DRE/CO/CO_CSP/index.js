import React from 'react';

import CategoryItem from '../../CategoryItem';
import CO_CSP_MAT from './CO_CSP_MAT';
import CO_CSP_MO from './CO_CSP_MO';
import CO_CSP_CIS from './CO_CSP_CIS';

// import './styles.css';

function CO_CSP({ totals, operations, pb }){

    const name = "CO_CSP";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Custos dos Serviços Prestados"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CO_CSP_MAT totals={totals} operations={operations}/>
            <CO_CSP_MO totals={totals} operations={operations}/>
            <CO_CSP_CIS totals={totals} operations={operations}/>
        </>
        }
    />
    )
}

export default CO_CSP;