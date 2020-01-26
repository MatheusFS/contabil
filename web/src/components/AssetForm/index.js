import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
    DatePicker,
    Button,
    Icon,
    TextInput,
} from "react-materialize";

import MaterializeModal from '../MaterializeModal';

import { datePickerOptions } from './options';
import './styles.css';

function AssetForm({ year, month, refresh }){

    const now = new Date(Date.now());

    const [name, setName] = useState('');
    const [value, setValue] = useState(0.0);
    const [start_date, setStartDate] = useState(now);
    const [lifetime_in_months, setLifetime] = useState([]);

    const handleAddAsset = async () => {

        await api.post('/assets', {
            name,
            value,
            start_date,
            lifetime_in_months
        });

        refresh();
    }

    const fields = [
        {
            name: 'asset-name',
            icon: 'edit',
            placeholder: 'Nome do ativo', 
            value: name, 
            onChange: e => setName(e.target.value)
        },
        {
            name: 'asset-value',
            icon: 'edit',
            placeholder: 'Valor (R$)', 
            value, 
            onChange: e => setValue(e.target.value)
        },
        {
            name: 'asset-lifetime',
            icon: 'edit',
            placeholder: 'Vida útil (Meses)', 
            value: lifetime_in_months, 
            onChange: e => setLifetime(e.target.value)
        },
    ];

    datePickerOptions.defaultDate = start_date;

    return (
    <MaterializeModal
        trigger={<Button
            className="blue"
            floating
            style={{right: 100}}
            icon={<Icon>add_shopping_cart</Icon>}
            large
            node="button"
            waves="light"
        />}
        title="Adicionar ativo"
        body={
            <form action="">
                <DatePicker options={datePickerOptions} onChange={e => setStartDate(e)}/>
                {fields.map((field, i) => (
                <TextInput
                    key={i}
                    icon={field.icon}
                    label={field.placeholder}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                />
                ))}
            </form>
        }
        action={handleAddAsset}
    />
    )
}

export default AssetForm;