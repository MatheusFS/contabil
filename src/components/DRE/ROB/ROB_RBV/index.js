import React from 'react';
import CategoryItem from '../../../CategoryItem';

function ROB_RBV({ totals, operations, pb }){

    const name = "ROB_RBV";

    return (
    <CategoryItem
        color="#38761d"
        name={name}
        title="Receitas Brutas de Vendas"
        total={totals[name]}
        operations={operations}
        pb={pb}
        childs={
            <>
                <CategoryItem
                    color="#6aa84f"
                    name='ROB_RBV_RMV'
                    title="Receitas das Mercadorias Vendidas"
                    total={totals['ROB_RBV_RMV']}
                    operations={operations}
                    pb={pb}
                    fillable
                />
                    <CategoryItem
                    color="#6aa84f"
                    name='ROB_RBV_RPI'
                    title="Receitas dos Produtos Industrializados"
                    total={totals['ROB_RBV_RPI']}
                />
                    <CategoryItem
                    color="#6aa84f"
                    name='ROB_RBV_RSP'
                    title="Receitas dos Serviços Prestados"
                    total={totals['ROB_RBV_RSP']}
                    operations={operations}
                    pb={pb}
                    fillable
                />
            </>
        }
    />
    )
}

export default ROB_RBV;