const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba simple
app.get('/test', (req, res) => {
    res.json({ message: 'Brooooo lo logramos' });
});

app.post('/test-post', (req, res) => {
    console.log('Datos recibidos:', req.body);
    res.json({ 
        message: 'Datos recibidos correctamente',
        data: req.body 
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});