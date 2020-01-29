import React from 'react';
import { Select, Icon, Button } from "react-materialize";

import './styles.css';

function DateNavbar({ year, month, cYear, cMonth, refresh }){

    function setDateAddingMonths(months){

        const initial_date = new Date(year, month-1);
        const initial_month = initial_date.getMonth();
        const final_date =  new Date(initial_date.setMonth(initial_month+months));
        cYear(final_date.getFullYear());
        cMonth(final_date.getMonth()+1);
        refresh();
    }

    return (
        <div className="selectors">
            <Button
                className="blue"
                node="button"
                waves="light"
                icon={<Icon>chevron_left</Icon>}
                onClick={e => setDateAddingMonths(-1)}
            >
            </Button>
            <Select
                onChange={e => cMonth(e.target.value)}
                value={month.toString()}
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
                value={year.toString()}
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
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </Select>
            <Button
                className="blue"
                node="button"
                waves="light"
                icon={<Icon>chevron_right</Icon>}
                onClick={e => setDateAddingMonths(1)}
            >
            </Button>
        </div>
    )
}

export default DateNavbar;