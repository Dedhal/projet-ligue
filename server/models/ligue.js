const mongoose = require('mongoose');

const LigueSchema = new mongoose.Schema({
    theme: {
        type: String,
        required: true
    },
    questionPost: {
        type: String,
        required: true
    },
    reponse: {
        type: String,
        required: true
    }
});

module.exports = Ligue = mongoose.model('Ligue', LigueSchema, "Ligue");