import React from 'react';
import CategoryItem from '../../../CategoryItem';

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
            <CategoryItem
                name='CO_CSP_MAT'
                color="#cc0000"
                title="Materiais"
                total={totals['CO_CSP_MAT']}
                operations={operations}
                pb={pb}
            />
            <CategoryItem
                color="#cc0000"
                name='CO_CSP_MO'
                title="Mão de Obra"
                total={totals['CO_CSP_MO']}
                operations={operations}
                pb={pb}
            />
            <CategoryItem
                name='CO_CSP_CIS'
                color="#cc0000"
                title="Custos Indiretos de Serviço"
                total={totals['CO_CSP_CIS']}
                operations={operations}
                pb={pb}
            />
        </>
        }
    />
    )
}

export default CO_CSP;