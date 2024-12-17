const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connect !!");
  } catch (error) {
    console.error("Not Connect ", error);
  }
};
module.exports = connectDb;
