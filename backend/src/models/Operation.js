const mongoose = require('mongoose');

const OperationSchema = new mongoose.Schema({
    name: String,
    category: String,
    value: Number,
    date: Date, // YYYY-MM-DD
});

module.exports = mongoose.model('Operation', OperationSchema);