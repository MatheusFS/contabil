import React from 'react';
import { Select } from "react-materialize";

import './styles.css';

function DateNavbar({ year, month, cYear, cMonth }){

    return (
        <div className="selectors">
            <Select
                onChange={e => cMonth(e.target.value)}
                value={month}
                options={{
                    classes: '',
                    dropdownOptions: {
                    alignment: 'right',
                    autoTrigger: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    }
                }}
            >
                <option value="1">Janeiro</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </Select>

            <span>de</span>

            <Select
                onChange={e => cYear(e.target.value)}
                value={year}
                options={{
                    classes: '',
                    dropdownOptions: {
                    alignment: 'right',
                    autoTrigger: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    }
                }}
            >
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </Select>
        </div>
    )
}

export default DateNavbar;