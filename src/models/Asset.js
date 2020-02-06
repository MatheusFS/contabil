const mongoose = require('mongoose');
const Installment = require('./utils/Installment');

const AssetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Qual o nome do ativo?']
    },
    type: {
        type: String,
        required: [true, 'Como esse ativo perde valor?']
    },
    price: {
        type: Number,
        required: [true, 'Qual o preço do ativo em R$?'],
        min: [.1, 'O preço mínimo de ativo é R$0,10']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantos ativos com as mesmas características quer registrar?'],
        min: [1, 'É necessário no mínimo 1 ativo para cadastro']
    },
    purchase_date: { // YYYY-MM-DD
        type: Date,
        required: [true, 'Qual a data de compra do ativo?']
    },
    cash_flow: {
        type: [Installment],
        required: [true, 'Como o ativo foi pago? (Saídas do caixa)']
    },
    use_start_date: { // YYYY-MM-DD
        type: Date,
        required: [true, 'Quando o ativo começou a ser usado?']
    },
    lifetime_in_months: {
        type: Number,
        required: [true, 'Qual a vida útil do ativo?']
    },
});

module.exports = mongoose.model('Asset', AssetSchema);