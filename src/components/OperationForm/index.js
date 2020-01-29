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

import { datePickerOptions, selectOptions } from '../utils/options';
import './styles.css';

function OperationForm({ year, month, refresh }){

    const now = new Date(Date.now());

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0.0);
    const [competence_date, setCompetenceDate] = useState(now);
    const [cash_flow_date, setCashFlowDate] = useState(now);
    const [categories, setCategories] = useState([]);

    useEffect(() => setCompetenceDate(new Date(year, month-1)), [year, month]);

    const handleAddOperation = async () => {

        await api.post('/operations', {
            name,
            category,
            value,
            competence_date,
            cash_flow_date
        });

        refresh();
    }

    const fields = [
        {
            icon: 'local_offer',
            placeholder: 'Nome da operação', 
            value: name, 
            onChange: e => setName(e.target.value)
        },
        {
            icon: 'attach_money',
            placeholder: 'Valor (R$)', 
            value: value, 
            onChange: e => setValue(e.target.value)
        },
    ];

    datePickerOptions.defaultDate = now;

    return (
    <MaterializeModal
        trigger={<Button
            className="green"
            floating
            icon={<Icon>playlist_add</Icon>}
            large
            node="button"
            waves="light"
        />}
        title="Adicionar operação"
        body={
            <>
                <Select
                    icon={<Icon>label</Icon>}
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    options={selectOptions}
                >
                    <option disabled value="">Selecione...</option>
                    {categories.map(category => (
                    <option
                        key={category._id}
                        value={category.name}
                        style={{ color: category.color }}
                        color={category.color}       
                    >
                        {category.title}
                    </option>
                    ))}
                </Select>
                <DatePicker 
                    icon={<Icon>event</Icon>}
                    label="Data de competência"
                    onChange={e => setCompetenceDate(e)}
                    options={datePickerOptions}
                />
                <DatePicker 
                    icon={<Icon>event_available</Icon>}
                    label="Data de caixa"
                    onChange={e => setCashFlowDate(e)}
                    options={datePickerOptions}
                />
                {fields.map((field, i) => (
                <TextInput
                    key={i}
                    icon={field.icon}
                    label={field.placeholder}
                    value={field.value.toString()}
                    onChange={field.onChange}
                />
                ))}
            </>
        }
        action={handleAddOperation}
    />
    )
}

export default OperationForm;