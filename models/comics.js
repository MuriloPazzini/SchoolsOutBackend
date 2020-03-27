const mongoose = require('mongoose');

const comicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    edition: {
        type: Number
    },
    pages: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    previewPages: {
        type: Array
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Comics', comicsSchema);