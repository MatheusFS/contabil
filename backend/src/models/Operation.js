const mongoose = require('mongoose');
const Installment = require('./utils/Installment');

const OperationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Qual o nome da operação']
    },
    category: {
        type: String,
        required: [true, 'A qual categoria essa operação pertence?']
    },
    value: {
        type: Number,
        required: [true, 'Qual o valor da operação em R$'],
        min: [.1, 'O preço mínimo de operação é R$0,10']
    },
    competence_date: { // YYYY-MM-DD
        type: Date,
        required: [true, 'Qual a data de COMPETÊNCIA da operação?']
    },
    cash_flow: {
        type: [Installment],
        required: [true, 'Quais são as ENTRADAS ou SAÍDAS do caixa referente a operação?']
    },
});

module.exports = mongoose.model('Operation', OperationSchema);