const express = require("express");
const User = require("./models/users");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("./router/route"));
require("dotenv").config();
require("./db/conn");
var morgan = require("morgan");

const port = process.env.PORT || 4000;

// app.use(morgan("dev"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.get("/", (req, res) => {
  res.send("hello kundali app developer");
});

app.listen(port, () => {
  console.log(`server is running on port no. ${port}`);
});
