let products = []; // Simula una base de datos temporal en memoria
let idCounter = 1;

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || price == null) {
    return res.status(400).json({ message: 'Nombre y precio son obligatorios' });
  }
  const newProduct = { id: idCounter++, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const { name, price } = req.body;
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

  if (!name || price == null) {
    return res.status(400).json({ message: 'Nombre y precio son obligatorios' });
  }

  product.name = name;
  product.price = price;
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Producto no encontrado' });

  products.splice(index, 1);
  res.status(204).send();
};
