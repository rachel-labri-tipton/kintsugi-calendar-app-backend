const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    }],
    metadata: {
        type: Object,
        default: {},
    },
});

const monthSchema = new mongoose.Schema({
    monthName: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    days: [daySchema],
    metadata: {
        type: Object,
        default: {},
    },
});

const Month = mongoose.model('Month', monthSchema);

module.exports = Month;