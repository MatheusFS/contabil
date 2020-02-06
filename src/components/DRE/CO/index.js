import React from 'react';

import CategoryItem from '../../CategoryItem';
import CO_CPV from './CO_CPV';
import CO_CSP from './CO_CSP';

// import './styles.css';

function CO({ totals, operations, pb }){

    const name = "CO";

    return (
    <CategoryItem
        name={name}
        color="#660000"
        title="Custos Operacionais"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CategoryItem
                name='CO_CMV'
                color="#990000"
                title="Custos das Mercadorias Vendidas"
                total={totals['CO_CMV']}
                operations={operations}
                pb={pb}
            />
            <CO_CPV totals={totals} operations={operations} pb={pb}/>
            <CO_CSP totals={totals} operations={operations} pb={pb}/>
        </>
        }
    />
    )
}

export default CO;