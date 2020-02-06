import React, { useState, useEffect } from 'react';
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
import maskDate from '../../utils/maskDate';

function AssetForm({ year, month, refresh }){

    const navigation_date = new Date(year, month - 1, 15);
    datePickerOptions.defaultDate = navigation_date;
    useEffect(() => setPurchaseDate(navigation_date), [year, month])

    const [errors, setErrors] = useState({});
    styleWrongFields(errors);


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
            setName('');
            setType('D');
            setPrice(0.0);
            setQuantity(1);
            setPurchaseDate(navigation_date);
            setCashFlow([]);
            setUseStartDate(navigation_date);
            setLifetime(12);
            // document.getElementById('new-asset').classList.remove('open');
        }
    }

    /*------------------ ASSET ------------------*/
    const [name, setName] = useState('');
    const [type, setType] = useState('D');
    const [price, setPrice] = useState(0.0);
    const [quantity, setQuantity] = useState(1);
    const [purchase_date, setPurchaseDate] = useState(navigation_date);
    const [cash_flow, setCashFlow] = useState([]);
    const [use_start_date, setUseStartDate] = useState(navigation_date);
    const [lifetime_in_months, setLifetime] = useState(12);
    /*-------------------------------------------*/

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
            <>
                <TextInput
                    id="name"
                    icon="shopping_cart"
                    label="Nome do ativo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    validate error='...'
                />
                <DatePicker
                    id="purchase_date"
                    icon={<Icon>event_available</Icon>}
                    label="Data de compra"
                    onChange={e => setPurchaseDate(e)}
                    options={{
                        ...datePickerOptions,
                        onClose: e => {
                            const field = document.getElementById('purchase_date');
                            field.value = maskDate(field.value, 'M y');
                        },
                    }}
                    value={maskDate(purchase_date, 'M y')}
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
                        value={quantity.toString()}
                        onChange={e => setQuantity(parseInt(e.target.value))}
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
                        value={lifetime_in_months.toString()}
                        onChange={e => setLifetime(parseInt(e.target.value))}
                        validate error='...'
                    />
                </div>
            </>
        }
        action={handleAddAsset}
    />
    )
}

export default AssetForm;