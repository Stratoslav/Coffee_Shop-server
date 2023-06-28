const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const uploadFile = require("express-fileupload");
const coffeeRouter = require("./routes/coffee.route");
const orderRouter = require("./routes/order.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("static"));
app.use(uploadFile());
app.use("/api", coffeeRouter);
app.use("/booking", orderRouter);
const PORT = process.env.PORT || 5000;

const start = () => {
  app.listen(PORT, () => {
    console.log(`server start on port: ${PORT}`);
  });
};

start();
