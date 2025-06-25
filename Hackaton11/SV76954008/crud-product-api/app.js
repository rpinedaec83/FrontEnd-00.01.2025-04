const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);

app.use((req, res, next) => {
  res.send('Bienvenido a la API de Productos 🛒');
});

app.use(errorHandler);

module.exports = app;
