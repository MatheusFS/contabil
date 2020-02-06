import React from "react";
import { Button, Icon } from "react-materialize";
import maskReal from "../../../utils/maskReal";
import floatToPercentage from "../../../utils/floatToPercentage";

function CashFlowTooltip({ cash_flow, value }){

    return (
        <Button
            className="grey"
            tooltip={`
                <ul>
                ${cash_flow.map(installment => `
                    <li>
                        ${new Date(installment.date).toLocaleDateString('pt-BR')}: 
                        ${maskReal(installment.value)} 
                        (${floatToPercentage(installment.value / value)})
                    </li>
                `).join('')}
                </ul>
            `}
            tooltipOptions={{
                position: 'top',
                html: true
            }}
            small
        >
            <Icon>list</Icon>    
        </Button>
    );
}

export default CashFlowTooltip;