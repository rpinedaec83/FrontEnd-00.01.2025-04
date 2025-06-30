const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// Ruta no encontrada
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.statusCode = 404;
  next(error); 
});

// Manejo DE errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
