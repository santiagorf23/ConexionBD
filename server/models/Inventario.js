const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    producto: String,
    cantidad: Number,
    precio: Number,
    categoria: String,
    estado: { type: String, enum: ['disponible', 'agotado'], default: 'disponible' }
}, { timestamps: true });

module.exports = mongoose.model('Inventario', inventarioSchema);