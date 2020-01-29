import React from 'react';

import {
    DatePicker,
    Icon,
    TextInput,
    Button
} from "react-materialize";

import { datePickerOptions } from "../utils/options";
import maskReal from "../../utils/maskReal";
import unmaskReal from "../../utils/unmaskReal";

function CashFlowInput({ cash_flow, setCashFlow, price }){

    const now = new Date(Date.now());

    const reduceSum = (acc, curr) => acc+curr.value;
    const getCashFlowTotal = cash_flow => cash_flow.reduce(reduceSum, 0);

    datePickerOptions.defaultDate = now;

    const handleInstallmentAdd = () => setCashFlow([...cash_flow, {
        date: now,
        value: price - getCashFlowTotal(cash_flow)
    }]);

    // handleRemoveShareholder = idx => () => {
    //     this.setState({
    //         shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    //     });
    // };

    const handleInstallmentDateChange = i => e => {
        const newInstallments = cash_flow.map((installment, j) => {
            return (i === j)
            ? { ...installment, date: e }
            : installment;
        });

        setCashFlow(newInstallments);
    };

    const handleInstallmentValueChange = i => e => {
        const newInstallments = cash_flow.map((installment, j) => {
            return (i === j)
            ? { ...installment, value: unmaskReal(e.target.value) }
            : installment;
        });

        setCashFlow(newInstallments);
    };

    return (
    <>
        <h5 className="center-align">Fluxo de caixa</h5>
        {cash_flow.map((installment, i) => (
        <div key={i} className="grid-5-5 grid-gap-3">
            <DatePicker
                icon={<Icon>event_available</Icon>}
                label={`Data do pagamento #${i+1}`}
                onChange={handleInstallmentDateChange(i)}
                options={datePickerOptions} 
            />
            <TextInput
                icon="attach_money"
                label={`Valor do pagamento #${i+1}`}
                value={maskReal(installment.value)}
                onChange={handleInstallmentValueChange(i)}
            />
        </div>
        ))}
        <Button
            className="blue"
            style={{width: '100%'}}
            onClick={handleInstallmentAdd}
        >
            <Icon>add</Icon>
        </Button>
    </>
    )
}

export default CashFlowInput;