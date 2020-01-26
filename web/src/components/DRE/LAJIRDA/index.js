import React from 'react';

import CategoryItem from '../CategoryItem';

// import './styles.css';

function LAJIRDA({ totals, pb }){

    const name = "LAJIRDA";

    return (
    <>
        <CategoryItem
            color="#fff"
            backgroundColor="#1c4587"
            title="Lucro Antes de Juros, I.R, Deprec. e Amort."
            total={totals[name]}
            pb={pb}
        />
    </>
    )
}

export default LAJIRDA;