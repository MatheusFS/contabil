import React, { useState } from 'react';
import FloatActionButton from '../FloatActionButton';
import api from '../../services/api';
import ModalMaker from '../ModalMaker';
import InputGroupMaker from '../InputGroupMaker';
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faMoneyBill, faCalendar } from '@fortawesome/free-solid-svg-icons'

// import './styles.css';

function NewOperationForm({ year, month }){

    const now = new Date(Date.now());
    const formattedDate = `${year}-${month}-${now.getDate()}`;

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const [date, setDate] = useState(formattedDate);
    const handleAddOperation = async () => {

        const response = await api.post('/operations', {
            name,
            category,
            value,
            date
        });

        console.log(response.data);
    }

    const fields = [
        {
            icon: faIdCard,
            placeholder: 'Nome da operação', 
            value: name, 
            onChange: e => setName(e.target.value)
        },
        {
            icon: faIdCard,
            placeholder: 'Categoria', 
            value: category, 
            onChange: e => setCategory(e.target.value)
        },
        {
            icon: faMoneyBill,
            placeholder: 'Valor (R$)', 
            value: value, 
            onChange: e => setValue(e.target.value)
        },
        {
            icon: faCalendar,
            placeholder: 'Data de competência', 
            value: date, 
            onChange: e => setDate(e.target.value)
        },
    ];

    return (
    <ModalMaker
        btn={<FloatActionButton/>}
        title="Adicionar operação"
        body={
            fields.map(field => (
                <>
                <select>
                    
                </select>
                <input type="text" class="datepicker"/>
                <InputGroupMaker
                    icon={field.icon}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                />
                </>
            ))
        }
        action={handleAddOperation}
    />
    )
}

export default NewOperationForm;