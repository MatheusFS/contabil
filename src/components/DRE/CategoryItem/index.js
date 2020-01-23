import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import floatToReal from "../../../utils/floatToReal";
import floatToPercentage from "../../../utils/floatToPercentage";

import './styles.css';

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

    const ops = operations
    ? operations.filter(operation => operation.category === name)
    : [];

    function toggle(e){

        e.target.parentElement.parentElement.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");
    }

    return (  
    <li style={{ backgroundColor, color }}>
    <Row>
        <Col xs="1">
            {ops.length||childs
            ? <span className="caret" onClick={toggle}></span>
            : ''}
        </Col>
        <Col><strong>{title}</strong></Col>
        <Col xs="2">{floatToReal(total)}</Col>
        <Col xs="2">{floatToPercentage(total / pb)}</Col>
    </Row>
        <ul className="nested">
            {ops.map(operation => (
                <li style={{ color: "#333", backgroundColor: '#FFF' }}>
                <Row>
                    <Col xs="1">{new Date(operation.date).toLocaleDateString()}</Col>
                    <Col>{operation.name}</Col>
                    <Col xs="2">{floatToReal(operation.value)}</Col>
                    <Col xs="2">{floatToPercentage(operation.value/pb)}</Col>
                </Row>
                </li>
            ))}
            {childs}
        </ul>
    </li>
    )
}

export default CategoryItem;