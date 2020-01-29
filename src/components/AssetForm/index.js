import React, { useState } from 'react';
import api from '../../services/api';

import {
    DatePicker,
    Button,
    Icon,
    TextInput,
    Select,
} from "react-materialize";

import MaterializeModal from '../MaterializeModal';
import CashFlowInput from "../CashFlowInput";

import { datePickerOptions, selectOptions } from '../utils/options';
import styleWrongFields from '../utils/styleWrongFields';

import './styles.css';
import maskReal from '../../utils/maskReal';
import unmaskReal from '../../utils/unmaskReal';

function AssetForm({ refresh }){

    const now = new Date(Date.now());

    const [name, setName] = useState('');
    const [type, setType] = useState('D');
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(1);
    const [purchase_date, setPurchaseDate] = useState(now);
    const [cash_flow, setCashFlow] = useState([
        {
            date: now,
            value: 0.0
        }
    ]);
    const [use_start_date, setUseStartDate] = useState(now);
    const [lifetime_in_months, setLifetime] = useState(12);
    
    const [errors, setErrors] = useState({});

    async function handleAddAsset(){

        const response = await api.post('/assets', {
            name,
            type,
            price,
            quantity,
            purchase_date,
            cash_flow,
            use_start_date,
            lifetime_in_months
        });

        const error = response.data.error;

        if(error != null){

            setErrors(error.errors)
        }else{

            refresh();
            document.getElementById('new-asset').classList.remove('open');
        }
    }

    styleWrongFields(errors);

    datePickerOptions.defaultDate = now;

    return (
    <MaterializeModal
        id='new-asset'
        trigger={<Button
            className="blue"
            floating
            style={{right: 110}}
            icon={<Icon>add_shopping_cart</Icon>}
            large
            node="button"
            waves="light"
        />}
        title="Adicionar ativo"
        body={
            <form action="#">
                <TextInput
                    id="name"
                    icon="shopping_cart"
                    label="Nome do ativo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    validate error='...'
                />
                <Select
                    id="type"
                    icon={<Icon>label</Icon>}
                    label="Tipo"
                    onChange={e => setType(e.target.value)}
                    value={type}
                    options={selectOptions}
                    validate error='...'
                >
                    <option disabled value="">Selecione...</option>
                    <option value="D">Depreciação</option>
                    <option value="A">Amortização</option>
                    <option value="E">Exaustão</option>
                </Select>
                <DatePicker
                    id="purchase_date"
                    icon={<Icon>event_available</Icon>}
                    label="Data de compra"
                    onChange={e => setPurchaseDate(e)}
                    options={datePickerOptions}
                    validate error='...'
                />
                <div className="grid-5-5 grid-gap-3">
                    <TextInput
                        id="price"
                        icon="attach_money"
                        label='Valor (R$)'
                        value={maskReal(price)}
                        onChange={e => setPrice(unmaskReal(e.target.value))}
                        validate error='...'
                    />
                    <TextInput
                        id="quantity"
                        icon='filter_none'
                        label='Quantidade'
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        validate error='...'
                    />
                </div>
                <CashFlowInput
                    id="cash_flow"
                    cash_flow={cash_flow}
                    setCashFlow={setCashFlow}
                    price={price}
                    validate error='...'
                />
                <div className="grid-5-5 grid-gap-3">
                    <DatePicker 
                        id="use_start_date"
                        icon={<Icon>event</Icon>}
                        label="Data de começo de uso"
                        onChange={e => setUseStartDate(e)}
                        options={datePickerOptions}
                        validate error='...'
                    />
                    <TextInput
                        id="lifetime_in_months"
                        icon='refresh'
                        label='Vida útil (Meses)'
                        value={lifetime_in_months}
                        onChange={e => setLifetime(e.target.value)}
                        validate error='...'
                    />
                </div>
            </form>
        }
        action={handleAddAsset}
    />
    )
}

export default AssetForm;