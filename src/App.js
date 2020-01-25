import React, { useState, useEffect } from 'react';
import api from './services/api';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './materialize-custom.css';
import './App.css';

import DRE from './components/DRE';
import RLE from './components/DRE/RLE';
import DateNavbar from './components/DateNavbar';
import OperationForm from './components/OperationForm';

function App() {

  const now = new Date(Date.now());
  
  const [month, setMonth] = useState(now.getMonth()+1);
  const [year, setYear] = useState(now.getFullYear());
  const [operations, setOperations] = useState([]);
  const [totals, setTotals] = useState([]);

  useEffect(() => {

    async function getOperationsByYearMonth(){

      const response = await api.get(`operations/ym/${year}/${month}`);
      setOperations(response.data);
    }
    async function getTotalsByYearMonth(){

      const response = await api.get(`totals/ym/${year}/${month}`);
      setTotals(response.data);
    }
    getOperationsByYearMonth();
    getTotalsByYearMonth();
  }, [year, month]);

  return (      
    <div id="app">
      <header>
        <DateNavbar 
          year={year} 
          month={month} 
          cYear={setYear} 
          cMonth={setMonth}
        />
        <ul><RLE totals={totals} pb={totals["ROB"]}/></ul>
      </header>
      <main>
        <DRE operations={operations} totals={totals}/>
      </main>
      <OperationForm year={year} month={month}/>
    </div>
  );
}

export default App;
