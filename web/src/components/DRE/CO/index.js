import React from 'react';

import CategoryItem from '../CategoryItem';
import CO_CMV from './CO_CMV';
import CO_CPV from './CO_CPV';
import CO_CSP from './CO_CSP';

// import './styles.css';

function CO({ totals, operations, pb }){

    const name = "CO";

    return (
    <CategoryItem
        color="#660000"
        name={name}
        title="Custos Operacionais"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CO_CMV totals={totals} operations={operations} pb={pb}/>
            <CO_CPV totals={totals} operations={operations} pb={pb}/>
            <CO_CSP totals={totals} operations={operations} pb={pb}/>
        </>
        }
    />
    )
}

export default CO;