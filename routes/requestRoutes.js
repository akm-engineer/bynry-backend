// routes/requestRoutes.js
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createRequest,
  getAllRequests,
} from "../controllers/requestController.js";

const router = express.Router();

router.post("/requests", authMiddleware, createRequest);
router.get("/requests", authMiddleware, getAllRequests);

export default router;
