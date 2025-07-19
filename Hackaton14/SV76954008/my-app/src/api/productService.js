import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/categories`);
  return res.data;
};

export const getByCategory = async (category) => {
  const res = await axios.get(`${API_URL}/category/${category}`);
  return res.data;
};
