import React from 'react';
import CategoryItem from '../../CategoryItem';

function DA({ totals, operations, pb }){

    const name = "DA";

    return (
    <CategoryItem
        name={name}
        color="#660000"
        title="Depreciações e Amortizações"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CategoryItem
                name='DA_D'
                color="#990000"
                title="Depreciações"
                total={totals['DA_D']}
                operations={operations}
                pb={pb}
            />
            <CategoryItem
                color="#990000"
                name='DA_A'
                title="Amortizações"
                total={totals['DA_A']}
                operations={operations}
                pb={pb}
            />
        </>}
    />
    )
}

export default DA;