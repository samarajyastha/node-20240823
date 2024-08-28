import Product from "../models/Product.js";

const getAllProducts = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const createProduct = async (data) => {
  return await Product.create(data);
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
};
