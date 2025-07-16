

export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
}

export async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) throw new Error('Error al obtener categorías');
  return res.json();
}
