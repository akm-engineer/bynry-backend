// models/request.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const requestSchema = new Schema({
  type: { type: String, required: true },
  details: { type: String, required: true },
  status: { type: String, default: "Pending" },
  submittedAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Request = model("Request", requestSchema);

export default Request;
