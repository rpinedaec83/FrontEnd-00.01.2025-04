// api/categoryService.js
export const getCategories = async () => {
  const res = await fetch('https://tu-api.com/categories');
  if (!res.ok) throw new Error('Error al obtener categorías');
  return await res.json();
}
