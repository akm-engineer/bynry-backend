import Request from "../models/request.js";
import User from "../models/user.js";

export const getDashboardData = async (req, res, next) => {
  try {
    const totalRequests = await Request.countDocuments();
    const totalUsers = await User.countDocuments();
    const pendingRequests = await Request.countDocuments({ status: "Pending" });
    const resolvedRequests = await Request.countDocuments({
      status: "Resolved",
    });
    res.json({ totalRequests, totalUsers, pendingRequests, resolvedRequests });
  } catch (error) {
    next(error);
  }
};
