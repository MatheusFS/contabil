import React from 'react';

import CategoryItem from '../../CategoryItem';
import RNO_RNO from './RNO_RNO';
import RNO_DNO from './RNO_DNO';

// import './styles.css';

function RNO({ totals, operations, pb }){

    const name = "RNO";

    return (
    <CategoryItem
        color="#7f6000"
        name={name}
        title="Resultados Não-Operacionais"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
        <>
            <RNO_RNO totals={totals}/>
            <RNO_DNO totals={totals}/>
        </>}
    />
    )
}

export default RNO;