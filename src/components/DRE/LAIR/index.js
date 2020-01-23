import React from 'react';

import CategoryItem from '../CategoryItem';

// import './styles.css';

function LAIR({ totals, pb }){

    const name = "LAIR";

    return (
    <>
        <CategoryItem
            color="#fff"
            backgroundColor="#1c4587"
            title="Lucro Antes do Imposto de Renda"
            total={totals[name]}
            pb={pb}
        />
    </>
    )
}

export default LAIR;