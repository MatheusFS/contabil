import React from 'react';
import ROB from './ROB';
import DROB from './DROB';
import ROL from './ROL';
import CO from './CO';
import LOB from './LOB';
import DA from './DA';
import LAJIRDA from './LAJIRDA';
import DO from './DO';
import LAJIR from './LAJIR';
import RFL from './RFL';
import LAIR from './LAIR';
import CJS from './CJS';
import LOL from './LOL';
import RNO from './RNO';
import AED from './AED';

import './styles.css';

function DRE({ operations, totals,  refresh}){

    const percentageBase = totals["ROB"];

    return (
    <ul id="DRE">
        <ROB totals={totals} operations={operations} pb={percentageBase}/>
        <DROB totals={totals} operations={operations} pb={percentageBase}/>
        <ROL totals={totals} pb={percentageBase}/>
        <CO totals={totals} operations={operations} pb={percentageBase}/>
        <LOB totals={totals} pb={percentageBase}/>
        <DO totals={totals} operations={operations} pb={percentageBase}/>
        <LAJIRDA totals={totals} pb={percentageBase}/>
        <DA totals={totals} operations={operations} pb={percentageBase}/>
        <LAJIR totals={totals} pb={percentageBase}/>
        <RFL totals={totals} operations={operations} pb={percentageBase}/>
        <LAIR totals={totals} pb={percentageBase}/>
        <CJS totals={totals} operations={operations} pb={percentageBase}/>
        <LOL totals={totals} pb={percentageBase}/>
        <RNO totals={totals} operations={operations} pb={percentageBase}/>
        <AED totals={totals} operations={operations} pb={percentageBase}/>
    </ul>
    )
}

export default DRE;