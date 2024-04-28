import Request from "../models/request.js";

export const getAllRequests = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = status
      ? { userId: req.userId, status }
      : { userId: req.userId };
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };
    const requests = await Request.paginate(query, options);
    res.json(requests);
  } catch (error) {
    next(error);
  }
};

export const updateRequestStatus = async (req, res, next) => {
  try {
    const { requestId } = req.params;
    const { status } = req.body;
    const request = await Request.findOneAndUpdate(
      { _id: requestId, userId: req.userId },
      { status },
      { new: true }
    );
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.json(request);
  } catch (error) {
    next(error);
  }
};
