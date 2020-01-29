import React from 'react';
import { Row, Col, Button } from "react-materialize";

import maskReal from "../../../utils/maskReal";
import floatToPercentage from "../../../utils/floatToPercentage";

import './styles.css';
import api from '../../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';

function CategoryItem({
    backgroundColor,
    color,
    name,
    title,
    total,
    operations,
    pb,
    childs,
    isFillable
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
        <Col s={6}><strong>{title}</strong></Col>
        <Col s={2}>{maskReal(total)}</Col>
        <Col s={2}>{floatToPercentage(total / pb)}</Col>
        <Col s={1}>
            {isFillable ?
            <Button className="blue" waves="light" onClick={e => addIn(name)}>
                +
            </Button>
            : '-'}
        </Col>
    </Row>
        <ul className="nested">
            {ops.map(operation => (
                <li key={operation._id} style={{ color: "#333", backgroundColor: '#FFF' }}>
                <Row>
                    <Col s={1}>{new Date(operation.competence_date).toLocaleDateString('pt-BR')}</Col>
                    <Col s={6}>{operation.name}</Col>
                    <Col s={2}>{maskReal(operation.value)}</Col>
                    <Col s={2}>{floatToPercentage(operation.value/pb)}</Col>
                    <Col s={1}>
                        <Button className="red" waves="light" onClick={e => destroyOperation(operation._id)}>
                            x
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