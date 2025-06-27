let products = [];
let idCounter = 1;

exports.getAll = (req, res) => {
  console.log("GET /products ejecutado");
  res.json(products);
};

exports.create = (req, res, next) => {
  console.log("GET /products ejecutado");
  const { name, price } = req.body;
  if (!name || price == null) {
    const error = new Error('Nombre y precio son obligatorios');
    error.statusCode = 400;
    return next(error);
  }
  const newProduct = { id: idCounter++, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.update = (req, res, next) => {
  console.log("GET /products ejecutado");
  const { id } = req.params;
  const { name, price } = req.body;
  const product = products.find(p => p.id == id);

  if (!product) {
    const error = new Error('Producto no encontrado');
    error.statusCode = 404;
    return next(error);
  }

  product.name = name;
  product.price = price;
  res.json(product);
};

exports.remove = (req, res, next) => {
  console.log("GET /products ejecutado");
  const { id } = req.params;
  const index = products.findIndex(p => p.id == id);

  if (index === -1) {
    const error = new Error('Producto no encontrado');
    error.statusCode = 404;
    return next(error);
  }

  products.splice(index, 1);
  res.status(204).send();
};
