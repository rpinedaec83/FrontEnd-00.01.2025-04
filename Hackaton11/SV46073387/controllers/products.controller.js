let products = [
  { id: 1, name: 'Laptop', price: 1500 },
  { id: 2, name: 'Mouse', price: 30 },
  { id: 3, name: 'Cargador', price: 130 },
  { id: 4, name: 'Teclado', price: 30 },
  { id: 5, name: 'USB 2T', price: 50 },
  { id: 6, name: 'Pantalla 30', price: 430 },
  { id: 7, name: 'Memoria Kingston', price: 300 },
 ];

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res, next) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    const err = new Error('Producto no encontrado');
    err.status = 404;
    return next(err);
  }
  res.json(product);
};

exports.createProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || typeof name !== 'string' || typeof price !== 'number') {
    const err = new Error('Datos inválidos: nombre (string) y precio (number) requeridos');
    err.status = 400;
    return next(err);
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res, next) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) {
    const err = new Error('Producto no encontrado');
    err.status = 404;
    return next(err);
  }
  const { name, price } = req.body;
  products[index] = { ...products[index], name, price };
  res.json(products[index]);
};

exports.deleteProduct = (req, res, next) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id === parseInt(id));
  if (index === -1) {
    const err = new Error('Producto no encontrado');
    err.status = 404;
    return next(err);
  }
  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};