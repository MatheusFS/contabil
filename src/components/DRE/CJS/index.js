import React from 'react';

import CategoryItem from '../CategoryItem';
import CJS_IR from './CJS_IR';
import CJS_CS from './CJS_CS';

// import './styles.css';

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
            <CJS_IR totals={totals} operations={operations}/>
            <CJS_CS totals={totals} operations={operations}/>
        </>}
    />
    )
}

export default CJS;