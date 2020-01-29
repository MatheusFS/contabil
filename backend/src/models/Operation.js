const mongoose = require('mongoose');
const Installment = require('./utils/Installment');

const OperationSchema = new mongoose.Schema({
    name: String,
    category: String,
    value: Number,
    competence_date: Date, // YYYY-MM-DD
    cash_flow: [Installment],
});

module.exports = mongoose.model('Operation', OperationSchema);