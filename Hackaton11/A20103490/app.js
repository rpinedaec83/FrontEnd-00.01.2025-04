const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { notFound, error } = require('./error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', routes);

app.use(notFound);

app.use(error);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
