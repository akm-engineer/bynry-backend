import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

import dotenv from "dotenv";
import "./db/db.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/api", requestRoutes);
app.use("/account", accountRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
