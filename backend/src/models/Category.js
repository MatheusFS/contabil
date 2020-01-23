const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    title: String,
    color: String,
    fillable: Boolean,
    left: Number,
    right: Number,
});

module.exports = mongoose.model('Category', CategorySchema);