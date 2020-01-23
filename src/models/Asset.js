const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
    name: String,
    value: Number,
    start_date: Date, // YYYY-MM-DD
    lifetime_in_months: Number,
});

module.exports = mongoose.model('Asset', AssetSchema);