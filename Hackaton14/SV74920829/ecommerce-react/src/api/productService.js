const API_URL = 'https://fakestoreapi.com/products'

export const getAllProducts = async () => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Error al cargar productos')
  return res.json()
}

export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error('Producto no encontrado')
  return res.json()
}

export const getFeaturedProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=4')
  if (!res.ok) throw new Error('Error al obtener productos')
  return res.json()
}

export const getCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  if (!res.ok) throw new Error('Error al cargar categorías')
  return res.json()
}
