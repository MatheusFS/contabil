import React from 'react';

import CategoryItem from '../CategoryItem';

// import './styles.css';

function LOB({ totals, pb }){

    const name = "LOB";

    return (
    <>
        <CategoryItem
            color="#fff"
            backgroundColor="#1c4587"
            title="Lucro Operacional Bruto"
            total={totals[name]}
            pb={pb}
        />
    </>
    )
}

export default LOB;