import React from 'react';

import CategoryItem from '../../CategoryItem';

// import './styles.css';

function RLE({ totals, pb }){

    const name = "RLE";

    return (
    <>
        <CategoryItem
            color="#fff"
            backgroundColor="#4c1130"
            title="Resultado Líquido do Exercício"
            total={totals[name]}
            pb={pb}
        />
    </>
    )
}

export default RLE;