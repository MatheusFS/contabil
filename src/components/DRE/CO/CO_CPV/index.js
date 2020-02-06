import React from 'react';
import CategoryItem from '../../../CategoryItem';

function CO_CPV({ totals, operations, pb }){

    const name = "CO_CPV";

    return (
    <CategoryItem
        name={name}
        color="#990000"
        title="Custos dos Produtos Vendidos"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CategoryItem
                name='CO_CPV_MP'
                color="#cc0000"
                title="Matéria Prima"
                total={totals['CO_CPV_MP']}
                operations={operations}
                pb={pb}
            />
            <CategoryItem
                name='CO_CPV_MOD'
                color="#cc0000"
                title="Mão de Obra Direta"
                total={totals['CO_CPV_MOD']}
                operations={operations}
                pb={pb}
            />
            <CategoryItem
                name='CO_CPV_CIF'
                color="#cc0000"
                title="Custos Indiretos de Fabricação"
                total={totals['CO_CPV_CIF']}
                operations={operations}
                pb={pb}
            />
        </>
        }
    />
    )
}

export default CO_CPV;