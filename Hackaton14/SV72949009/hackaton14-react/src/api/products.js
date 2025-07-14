export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Error al cargar productos');
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error('Producto no encontrado');
  return res.json();
}