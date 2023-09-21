const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});
mongoose.connection.on("error", (err) => {
  console.log("Mongo DB Connection Failed");
});
