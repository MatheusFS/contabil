const Operation = require('../models/Operation');
const getOperationsByCategory = require('./utils/getOperationsByCategory');
const getOperationsByMonth = require('./utils/getOperationsByMonth');
const getOperationsByDates = require('./utils/getOperationsByDates');
const getOperationsByYearMonth = require('./utils/getOperationsByYearMonth');
const getAssetsDepreciationByYearMonth = require('./utils/getAssetsDepreciationByYearMonth');

// CONTROLLER FUNCTIONS
// index, show, store, update, destroy

module.exports = {

    async index(req, res){
        
        const operations = await Operation.find();
        return res.json(operations);
    },

    async store(req, res){

        const { name, category, value, date }  = req.body;
  
        operation = await Operation.create({
            name,
            category,
            value,
            date,
        });
    
        return res.json(operation);
    },

    async destroy(req, res){

        const { _id } = req.params;

        const response = await Operation.deleteOne({ _id });

        return res.json(response);
    },

    async byCategory(req, res){

        const { category } = req.params;

        const operations = await getOperationsByCategory(category);

        return res.json(operations);
    },

    async byMonth(req, res){

        const { month } = req.params;

        const operations = await getOperationsByMonth(month);

        return res.json(operations);
    },

    async byYearMonth(req, res){

        const { year, month } = req.params;

        const operations = await getOperationsByYearMonth(year, month);

        const depreciations = await getAssetsDepreciationByYearMonth(year, month);

        if(depreciations){

            operations.push(...depreciations);
        }

        return res.json(operations);
    },

    async byDates(req, res){

        const { start, end } = req.params;
        
        const operations = await getOperationsByDates(start, end);

        res.json(operations);
    }
}