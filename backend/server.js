const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db");
const authrouter = require("./routes/userRoutes");
const restaurantRouter = require("./routes/restaurantRoutes");


const app = express();
const PORT = process.env.PORT || 8090;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/auth",authrouter)
app.use("/api/restaurants",restaurantRouter)
app.listen(PORT, async () => {
  console.log("Server is running on port");
  await connectDb();
});
