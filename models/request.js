import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema, model } = mongoose;

const requestSchema = new Schema({
  type: { type: String, required: true },
  details: { type: String, required: true },
  status: { type: String, default: "Pending" },
  submittedAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

requestSchema.plugin(mongoosePaginate);

const Request = model("Request", requestSchema);

export default Request;
