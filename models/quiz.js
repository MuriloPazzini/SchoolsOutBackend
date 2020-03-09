const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 0
    },
    questions: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Quiz', quizSchema);