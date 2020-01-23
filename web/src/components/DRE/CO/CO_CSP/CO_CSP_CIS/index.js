import React from 'react';

import CategoryItem from '../../../CategoryItem';

// import './styles.css';

function CO_CSP_CIS({ totals, operations, pb }){

    const name = "CO_CSP_CIS";

    return (
    <CategoryItem
        color="#cc0000"
        name={name}
        title="Custos Indiretos de Serviço"
        total={totals[name]}
        operations={operations}
        pb={pb}
    />
    )
}

export default CO_CSP_CIS;