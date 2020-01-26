import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
    DatePicker,
    Button,
    Icon,
    TextInput,
    Select
} from "react-materialize";

import MaterializeModal from '../MaterializeModal';

import { datePickerOptions, selectOptions } from './options';
import './styles.css';

function OperationForm({ year, month, refresh }){

    const now = new Date(Date.now());

    async function getFillableCategories(){

        const { data } = await api.get('categories/f/true');
        setCategories(data);
    }

    useEffect(() => {
        getFillableCategories();
    },[]);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0.0);
    const [date, setDate] = useState(now);
    const [categories, setCategories] = useState([]);

    const handleAddOperation = async () => {

        await api.post('/operations', {
            name,
            category,
            value,
            date
        });

        refresh();
    }

    const fields = [
        {
            name: 'operation-name',
            icon: 'edit',
            placeholder: 'Nome da operação', 
            value: name, 
            onChange: e => setName(e.target.value)
        },
        {
            name: 'operation-value',
            icon: 'edit',
            placeholder: 'Valor (R$)', 
            value: value, 
            onChange: e => setValue(e.target.value)
        },
    ];

    datePickerOptions.defaultDate = date;

    return (
    <MaterializeModal
        trigger={<Button
            className="blue"
            floating
            icon={<Icon>playlist_add</Icon>}
            large
            node="button"
            waves="light"
        />}
        title="Adicionar operação"
        body={
            <form action="">
                <DatePicker options={datePickerOptions} onChange={e => setDate(e)}/>
                <Select
                    id="operation-category"
                    onChange={e => setCategory(e.target.value)}
                    options={selectOptions}
                    value={category}
                >
                    <option disabled value="">Selecione...</option>
                    {categories.map(category => (
                    <option key={category._id} value={category.name}>
                        {category.title}
                    </option>
                    ))}
                </Select>
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
        action={handleAddOperation}
    />
    )
}

export default OperationForm;