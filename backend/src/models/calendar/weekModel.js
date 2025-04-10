const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
    weekNumber: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }]
});

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;