import React from 'react';

import CategoryItem from '../CategoryItem';

// import './styles.css';

function LOL({ totals, pb }){

    const name = "LOL";

    return (
    <>
        <CategoryItem
            color="#fff"
            backgroundColor="#1c4587"
            title="Lucro Operacional Líquido"
            total={totals[name]}
            pb={pb}
        />
    </>
    )
}

export default LOL;