import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function LAJIR({ totals, pb }){

    const name = "LAJIR";

    return (
    <>
        <CategoryItem
            color="#fff"
            backgroundColor="#1c4587"
            title="Lucro Antes de Juros e Impostos de Renda"
            total={totals[name]}
            pb={pb}
        />
    </>
    )
}

export default LAJIR;