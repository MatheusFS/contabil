import React, { useState, useEffect } from 'react';
import api from './services/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DRE from './components/DRE';
import RLE from './components/DRE/RLE';
import YearMonthSelector from './components/YearMonthSelector';
import NewOperationForm from './components/NewOperationForm';

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
        <YearMonthSelector 
          year={year} 
          month={month} 
          cYear={setYear} 
          cMonth={setMonth}
        />
        <ul><RLE totals={totals} pb={totals["ROB"]}/></ul>
      </header>
      <main>
        <DRE operations={operations} totals={totals}/>
        <NewOperationForm year={year} month={month}/>
      </main>
    </div>
  );
}

export default App;
