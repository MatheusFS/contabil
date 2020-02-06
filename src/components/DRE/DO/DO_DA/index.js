import React from 'react';
import CategoryItem from '../../../CategoryItem';

function DO_DA({ totals, operations, pb }){

    const name = "DO_DA";

    return (
    <CategoryItem
        color="#990000"
        name={name}
        title="Despesas Administrativas"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CategoryItem
                color="#cc0000"
                name='DO_DA_DGA'
                title="Despesas Gerais Administrativas"
                total={totals['DO_DA_DGA']}
                operations={operations}
                pb={pb}
            />
            <CategoryItem
                color="#cc0000"
                name='DO_DA_PES'
                title="Pessoal"
                total={totals['DO_DA_PES']}
                operations={operations}
                pb={pb}
            />
        </>
        }
    />
    )
}

export default DO_DA;