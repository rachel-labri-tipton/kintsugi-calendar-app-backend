const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    metadata: {
        type: Object,
        default: {}
    }
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;