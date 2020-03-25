const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    photoUrl: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    aboutMe: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    id: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    owned: {
        type: Array
    }
});

module.exports = mongoose.model('User', userSchema);