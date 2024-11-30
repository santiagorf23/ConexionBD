const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: String,
    duracion: Number,
    genero: String,
    clasificacion: String,
    estado: { type: String, enum: ['activa', 'inactiva'], default: 'activa' }
}, { timestamps: true });

module.exports = mongoose.model('Pelicula', peliculaSchema);