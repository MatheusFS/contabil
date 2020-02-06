import React from 'react';
import CategoryItem from '../../CategoryItem';

function AED({ totals, operations, pb }){

    const name = "AED";

    return (
    <CategoryItem
        name={name}
        color="#7f6000"
        title="Aportes e Distribuições"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CategoryItem
                name={name+'_AC'}
                color="#38761d"
                title="Aportes de Capital"
                total={totals[name+'_AC']}
                operations={operations}
                pb={pb}
                fillable
            />
            <CategoryItem
                name={name+'_DL'}
                color="#990000"
                title="Distribuições de Lucros"
                total={totals[name+'_DL']}
                operations={operations}
                pb={pb}
                fillable
            />
        </>}
    />
    
    )
}

export default AED;