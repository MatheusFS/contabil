const mongoose = require('mongoose');

const Installment = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Qual a data da parcela?']
    },
    value: {
        type: Number,
        required: [true, 'Qual o valor da parcela (R$)'],
        min: [1.0, 'O valor mínimo por parcela é R$1,00'],
    }
});

module.exports = Installment;