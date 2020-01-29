const Asset = require('../models/Asset');
const filterCashFlow = require('./utils/filterCashFlow');
const to = require('../utils/to');

// CONTROLLER FUNCTIONS
// index, show, store, update, destroy

module.exports = {

    async index(req, res){
        
        const assets = await Asset.find();
        return res.json(assets);
    },

    async store(req, res){

        const { name, type, price, quantity, purchase_date, cash_flow, use_start_date, lifetime_in_months }  = req.body;

        const filtered_cash_flow = filterCashFlow(cash_flow);

        const [error, asset] = await to(Asset.create({
            name,
            type,
            price,
            quantity,
            purchase_date,
            cash_flow: filtered_cash_flow,
            use_start_date,
            lifetime_in_months,
        }));

        return res.json({ error, asset });
    }
}