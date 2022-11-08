const mongoose = require("mongoose");

// const DB = process.env.DATABASE;
const DB = "mongodb://127.0.0.1:27017/kundali";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfully");
  })
  .catch((error) => console.log(`no connection`, error));
