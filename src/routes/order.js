import express from "express";
import {
  createOrder,
  getAllOrdersByUser,
} from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

/**
 * POST
 * /api/order
 */
router.post("/", auth, createOrder);

/**
 * POST
 * /api/order/user
 */
router.get("/user", auth, getAllOrdersByUser);

export default router;
