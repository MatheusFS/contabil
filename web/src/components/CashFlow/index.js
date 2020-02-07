import React, { useState } from 'react';
import { Row, Col } from "react-materialize";

import './styles.css';
import maskDate from '../../utils/maskDate';
import maskReal from '../../utils/maskReal';
import api from '../../services/api';

function CashFlow({  }){

    const [cash_flow, setCashFlow] = useState([]);

    async function getCashFlowSinceYearMonth(year, month){

        const response = await api.get(`cash_flow/s/ym/${year}/${month}`);
        setCashFlow(response.data);
    }

    getCashFlowSinceYearMonth(2019, 8);

    return (
    <>
        <ul>
        {cash_flow.map(installment => (
            <li>
                <Row>
                    <Col s={2}>{maskDate(installment.date)}</Col>
                    <Col s={8}>{installment.name}</Col>
                    <Col s={2}>{maskReal(installment.value)}</Col>
                </Row>
            </li>
        ))}
        </ul>
        <br/><br/><br/><br/><br/><br/>
        <div className="cashier z-depth-4">
            {maskReal(cash_flow.actual)}
        </div>
    </>
    )
}

export default CashFlow;