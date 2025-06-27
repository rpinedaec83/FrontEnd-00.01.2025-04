require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));

app.use(express.json());

// Rutas
app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('🚀 API RESTful de Productos activa. Usa /api/products');
});

// Ruta no encontrada
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});