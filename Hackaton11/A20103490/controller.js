let products = [
  { id: 1, name: 'Laptop', price: 1500 },
  { id: 2, name: 'Mouse', price: 20 }
];

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
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ message: 'Datos inválidos' });
  }
  const newProduct = { id: Date.now(), name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const { name, price } = req.body;
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

  if (name) product.name = name;
  if (price) product.price = price;

  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Producto no encontrado' });

  products.splice(index, 1);
  res.status(204).send();
};
