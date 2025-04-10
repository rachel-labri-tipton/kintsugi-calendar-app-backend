const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
    themeName: {
        type: String,
        required: true,
        unique: true
    },
    colors: {
        primary: {
            type: String,
            required: true
        },
        secondary: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    styles: {
        font: {
            type: String,
            required: true
        },
        layout: {
            type: String,
            required: true
        }
    }
});

const Theme = mongoose.model('Theme', themeSchema);

module.exports = Theme;