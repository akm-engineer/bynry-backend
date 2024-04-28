// controllers/requestController.js
import Request from "../models/request.js";

export const createRequest = async (req, res) => {
  try {
    const { type, details } = req.body;
    const request = new Request({ type, details, userId: req.userId });
    await request.save();
    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find({ userId: req.userId });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
