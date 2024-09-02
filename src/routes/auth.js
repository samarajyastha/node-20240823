import express from "express";
import { login, logout, register } from "../controllers/authController.js";

const router = express.Router();

/**
 * POST
 * /api/auth/register
 * Register user
 */
router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;
