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
import maskReal from '../../utils/maskReal';
import unmaskReal from '../../utils/unmaskReal';
import maskDate from '../../utils/maskDate';
import CashFlowInput from '../CashFlowInput';
import styleWrongFields from '../utils/styleWrongFields';

function OperationForm({ year, month, refresh }){

    const [navigation_date] = useState(new Date(year, month - 1, 15));
    useEffect(() => setCompetenceDate(navigation_date), [navigation_date])
    datePickerOptions.defaultDate = navigation_date;

    const [categories, setCategories] = useState([]);
    useEffect(() => setCategories([]), []);

    const [errors, setErrors] = useState({});
    styleWrongFields(errors);

    function handleChangeCategory(e){

        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];
        let flow_type;
        if(typeof selectedOption.attributes.flow_type !== 'undefined'){

            flow_type = selectedOption.attributes.flow_type.value;
        }else{

            return alert('O atributo flow_type é undefined');
        }
        
        setFlowType(flow_type);
        setCategory(e.target.value);
    }

    async function handleAddOperation(){

        const response = await api.post('/operations', {
            flow_type,
            name,
            category,
            value,
            competence_date,
            cash_flow
        });

        const error = response.data.error;

        if(error != null){

            setErrors(error.errors)
        }else{

            refresh();
            setName('');
            setCategory('');
            setValue(0.0);
            setCompetenceDate(navigation_date);
            setCashFlow([]);
        }
    }

    /*---------------- OPERATION ----------------*/
    const [flow_type, setFlowType] = useState('out');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0.0);
    const [competence_date, setCompetenceDate] = useState(navigation_date);
    const [cash_flow, setCashFlow] = useState([]);
    /*-------------------------------------------*/

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
                <TextInput
                    id="flow_type"
                    value={flow_type}
                    onChange={e => setFlowType(e.target.value)}
                    validate error='...'
                />
                <DatePicker 
                    id="competence_date"
                    icon={<Icon>event</Icon>}
                    label="Data de competência"
                    onChange={e => setCompetenceDate(e)}
                    options={datePickerOptions}
                    value={maskDate(competence_date, 'M y')}
                    validate error='...'
                />
                <Select
                    id="category"
                    icon={<Icon>label</Icon>}
                    value={category}
                    onChange={handleChangeCategory}
                    options={selectOptions}
                    validate error='...'
                >
                    <option disabled value="">Selecione...</option>
                    <optgroup label="RECEITAS OPERACIONAIS BRUTAS">
                        <option flow_type="in" value="ROB_RBV_RMV">Receitas das Mercadorias Vendidas</option>
                        <option flow_type="in" value="ROB_RBV_RPI">Receitas dos Produtos Industrializados</option>
                        <option flow_type="in" value="ROB_RBV_RSP">Receitas dos Serviços Prestados</option>
                    </optgroup>
                    <optgroup label="DEDUÇÕES DAS RECEITAS OPERACIONAIS BRUTAS">
                        <option flow_type="out" value="DROB_ISV">Impostos Sobre Vendas</option>
                        <option flow_type="out" value="DROB_DDSV">Devoluções e Descontos Sobre Vendas</option>
                    </optgroup>
                    <optgroup label="CUSTOS OPERACIONAIS">
                        <option value="CO_CMV">Custos das Mercadorias Vendidas</option>
                        <option disabled>Custos dos Produtos Vendidos</option>
                        <option value="CO_CPV_MP">Matéria Prima</option>
                        <option value="CO_CPV_MOD">Mão de Obra Direta</option>
                        <option value="CO_CPV_CIF">Custos Indiretos de Fabricação</option>
                        <option disabled>Custos dos Produtos Vendidos</option>
                        <option value="CO_CPV_MAT">Materiais</option>
                        <option value="CO_CPV_MO">Mão de Obra</option>
                        <option value="CO_CPV_CIS">Custos Indiretos de Serviço</option>
                    </optgroup>
                    <optgroup label="DESPESAS OPERACIONAIS">
                        <option value="DO_DC">Despesas Comerciais</option>
                        <option disabled>Despesas Administrativas</option>
                        <option value="DO_DA_PES">Pessoal</option>
                        <option value="DO_DA_DGA">Despesas Gerais Administrativas</option>
                    </optgroup>
                    <optgroup label="RESULTADOS FINANCEIROS LÍQUIDOS">
                        <option value="RFL_RF">Receitas Financeiras</option>
                        <option value="RFL_DF">Despesas Financeiras</option>
                    </optgroup>
                    <optgroup label="COMPROMETIMENTOS DE JUSTIÇA SOCIAL">
                        <option value="CJS_IR">Impostos de Renda</option>
                        <option value="CJS_CS">Contribuições Sociais</option>
                    </optgroup>
                    <optgroup label="RESULTADOS NÃO-OPERACIONAIS">
                        <option value="RNO_RNO">Receitas Não-Operacionais</option>
                        <option value="RNO_DNO">Despesas Não-Operacionais</option>
                    </optgroup>
                    <optgroup label="APORTES E DISTRIBUIÇÕES">
                        <option value="AED_AC">Aportes de Capital</option>
                        <option value="AED_DL">Distribuições de Lucros</option>
                    </optgroup>
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
                <TextInput
                    id="name"
                    icon='local_offer'
                    label='Nome da operação'
                    value={name.toString()}
                    onChange={e => setName(e.target.value)}
                    validate error='...'
                />
                <TextInput
                    id="value"
                    icon='attach_money'
                    label='Valor (R$)'
                    value={maskReal(value)}
                    onChange={e => setValue(unmaskReal(e.target.value))}
                    validate error='...'
                />
                <CashFlowInput
                    id="cash_flow"
                    cash_flow={cash_flow}
                    setCashFlow={setCashFlow}
                    price={value}
                    validate error='...'
                />
            </>
        }
        action={handleAddOperation}
    />
    )
}

export default OperationForm;