const Operation = require('../../models/Operation');

module.exports = async function getOperationsByCategory(category){

    const operations = await Operation.find({ category });

    return operations;
}