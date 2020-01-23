import React from 'react';

import CategoryItem from '../CategoryItem';

// import './styles.css';

function ROL({ totals, pb }){

    const name = "ROL";

    return (
    <>
        <CategoryItem
            color="#fff"
            backgroundColor="#1c4587"
            title="Receita Operacional Líquida"
            total={totals[name]}
            pb={pb}
        />
    </>
    )
}

export default ROL;