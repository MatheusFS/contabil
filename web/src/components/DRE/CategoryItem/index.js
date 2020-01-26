import React from 'react';
import { Row, Col, Button } from "react-materialize";

import floatToReal from "../../../utils/floatToReal";
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
    childs
}){

    const [isFillable, setIsFillable] = useState(false);

    useEffect(()=>{

        async function compareFillable(name){
            
            if(name){

                const response = await api.get('/categories/n/'+name);
                if(response.data[0]){

                    const { fillable } = response.data[0];
                    setIsFillable(fillable);
                }
            }
        }

        compareFillable(name);
    }, []);

    const ops = operations
    ? operations.filter(operation => operation.category === name)
    : [];

    function toggle(e, name){

        e.stopPropagation();
        if(name){
            document.querySelector(`#${name} .nested`).classList.toggle("active");
            document.querySelector(`#${name} .caret`).classList.toggle("caret-down");
        }
    }

    async function destroyOperation(id){

        const response = await api.delete(`/operation/${id}`);
        console.log(response.data);
    }

    const addIn = (name) => {

        document.getElementById('modal-new-operation');
        document.getElementById('operation-category').value = name;
    }

    return (  
    <li id={name} style={{ backgroundColor, color }} onClick={e => toggle(e, ops.length||childs?name:false)}>
    <Row>
        <Col s={1}>
            {ops.length||childs
            ? <span className="caret"></span>
            : ''}
        </Col>
        <Col s={6}><strong>{title}</strong></Col>
        <Col s={2}>{floatToReal(total)}</Col>
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
                    <Col s={1}>{new Date(operation.date).toLocaleDateString('pt-BR')}</Col>
                    <Col s={6}>{operation.name}</Col>
                    <Col s={2}>{floatToReal(operation.value)}</Col>
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