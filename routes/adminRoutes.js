import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getDashboardData } from "../controllers/adminController.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, getDashboardData);

export default router;
