import React from 'react';
import CategoryItem from '../../CategoryItem';

function CJS({ totals, operations, pb }){

    const name = "CJS";

    return (
    <CategoryItem
        color="#660000"
        name={name}
        title="Comprometimentos de Justiça Social"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <CategoryItem
                color="#990000"
                name='CJS_CS'
                title="Contribuições Sociais"
                total={totals['CJS_CS']}
                operations={operations}
                pb={pb}
                fillable
            />
            <CategoryItem
                color="#990000"
                name='CJS_IR'
                title="Impostos de Renda"
                total={totals['CJS_IR']}
                operations={operations}
                pb={pb}
                fillable
            />
        </>}
    />
    )
}

export default CJS;