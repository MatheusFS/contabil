import React from 'react';
import { Row, Col, Button, Icon } from "react-materialize";

import maskReal from "../../utils/maskReal";
import floatToPercentage from "../../utils/floatToPercentage";
import CashFlowTooltip from "./CashFlowTooltip";

import './styles.css';
import api from '../../services/api';

function CategoryItem({
    backgroundColor,
    color,
    name,
    title,
    total,
    operations,
    pb,
    childs,
    fillable
}){

    const ops = operations
    ? operations.filter(operation => operation.category === name)
    : [];

    function toggle(e, name){

        if(e.target.tagName === 'BUTTON') return;
        e.stopPropagation();
        if(name){
            document.querySelector(`#${name} .nested`).classList.toggle("active");
            document.querySelector(`#${name} .caret`).classList.toggle("caret-down");
        }
    }

    async function destroyOperation(id){

        await api.delete(`/operation/${id}`);
        return window.location.reload(false);
    }

    const addIn = (name) => {

        document.getElementById('modal-new-operation');
        document.getElementById('operation-category').value = name;
    }

    return (  
    <li 
        id={name} 
        style={{ backgroundColor, color }} 
        className="user-none"
    >
    <Row onClick={e => toggle(e, ops.length||childs?name:false)}>
        <Col s={1}>
            {ops.length||childs
            ? <span className="caret"></span>
            : ''}
        </Col>
        <Col s={7}><strong>{title}</strong></Col>
        <Col s={1}>{maskReal(total)}</Col>
        <Col s={1}>{floatToPercentage(total / pb)}</Col>
        <Col s={2}>
            {fillable ?
            <Button 
                small
                className="blue"
                waves="light" 
                onClick={e => addIn(name)}
            >
                <Icon>add</Icon>
            </Button>
            : '-'}
        </Col>
    </Row>
        <ul className="nested">
            {ops.map(operation => (
                <li key={operation._id} style={{ color: "#333", backgroundColor: '#FFF' }}>
                <Row>
                    <Col s={2}>
                        <div className="grid-6-4 grid-gap-1">
                            {new Date(operation.competence_date).toLocaleDateString('pt-BR')}
                            {typeof operation.cash_flow !== 'undefined'
                            ? <CashFlowTooltip cash_flow={operation.cash_flow} value={operation.value}/>
                            : ''}
                        </div>
                    </Col>
                    <Col s={6}>{operation.name}</Col>
                    <Col s={1}>{maskReal(operation.value)}</Col>
                    <Col s={1}>{floatToPercentage(operation.value/pb)}</Col>
                    <Col s={2} className="grid-5-5 grid-gap-2">
                        <Button className="blue" small waves="light" onClick={e => console.log(e)}>
                            <Icon>edit</Icon>
                        </Button>
                        <Button className="red" small waves="light" onClick={e => destroyOperation(operation._id)}>
                            <Icon>close</Icon>
                        </Button>
                    </Col>
                </Row>
                </li>
            ))}
            {childs}
        </ul>
    </li>
    )
}

export default CategoryItem;