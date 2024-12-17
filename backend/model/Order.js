const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId},
  restaurantId: { type: mongoose.Schema.Types.ObjectId},
  foodItems: [{foodId: { type: mongoose.Schema.Types.ObjectId },},],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
