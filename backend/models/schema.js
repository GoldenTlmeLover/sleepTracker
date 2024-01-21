const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    hourTrack: {
        type: Number,
        required: true
    },
    dateTrack: {
        type: Date,
        required: true
    }
})
module.exports = mongoose.model('schema', schema)