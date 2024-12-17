const Order = require("../model/Order");

const createOrder = async (req, res) => {
  try {
    const { restaurantId, foodItems, totalAmount } = req.body;
    const order = await Order.create({
      userId: req.user.id,
      restaurantId,
      foodItems,
      totalAmount,
    });
    res.status(201).send({ message: "Order created", order });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });

    res.status(200).send({ orders });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createOrder, getOrdersByUser };
