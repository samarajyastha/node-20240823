import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * GET
 * /api/products
 * Get all products
 */
router.get("/", getAllProducts);

/**
 * GET
 * /api/products/:id
 * Get product by id
 */
router.get("/:id", getProductById);

/**
 * POST
 * /api/products
 * Add a product
 */
router.post("/", addProduct);

export default router;
