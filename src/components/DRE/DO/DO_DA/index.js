import React from 'react';

import CategoryItem from '../../CategoryItem';
import DO_DA_DGA from "./DO_DA_DGA";
import DO_DA_PES from "./DO_DA_PES";

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
            <DO_DA_DGA totals={totals} operations={operations} pb={pb}/>
            <DO_DA_PES totals={totals} operations={operations} pb={pb}/>
        </>
        }
    />
    )
}

export default DO_DA;