const mongoose = require('mongoose');

const ProduitsSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }
});

module.exports = Produits = mongoose.model('Produits', ProduitsSchema, "Produits");