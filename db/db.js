import mongoose from "mongoose";

const URL =
  "mongodb+srv://ashishgk1999:dps0qDDuOSChIaWf@cluster0.tk2jjce.mongodb.net/";
mongoose
  .connect(URL)
  .then(() => {
    console.log("Db is connecting");
  })
  .catch((err) => {
    console.log(err);
  });
