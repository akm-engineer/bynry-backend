import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getAllRequests,
  updateRequestStatus,
} from "../controllers/requestController.js";

const router = express.Router();

router.get("/requests", authMiddleware, getAllRequests);
router.put("/requests/:requestId/status", authMiddleware, updateRequestStatus);

export default router;
