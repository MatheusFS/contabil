import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function AED_AC({ totals, operations, pb }){

    const name = "AED_AC";

    return (
    <CategoryItem
        color="#38761d"
        name={name}
        title="Aportes de Capital"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default AED_AC;