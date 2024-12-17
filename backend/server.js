const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const connectDb = require("./config/db");
// const userRouter = require("./routes/userRoutes");
// const restaurantRouter = require("./routes/restaurantRoutes");
// const foodRouter = require("./routes/foodRoutes");
// const orderRouter = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/users", userRouter);
// app.use("/api/restaurants", restaurantRouter);
// app.use("/api/foods", foodRouter);
// app.use("/api/orders", orderRouter);

app.use('/users',user)

app.get("/", (req, res) => {
  res.send("welcome");
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, async () => {
  console.log("Server is running on port");
  await connectDb();
});
