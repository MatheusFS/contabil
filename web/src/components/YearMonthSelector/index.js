import React from 'react';

import './styles.css';

function YearMonthSelector({ year, month, cYear, cMonth }){

    return (
        <div className="selectors">
            <select onChange={e => cMonth(e.target.value)} value={month}>
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
            </select>
            <span>de</span>
            <select onChange={e => cYear(e.target.value)} value={year}>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default YearMonthSelector;