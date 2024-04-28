// routes/accountRoutes.js
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { updateAccount } from "../controllers/accountController.js";

const router = express.Router();

router.put("/account", authMiddleware, updateAccount);

export default router;
