const Food = require("../model/Food");

const createFood = async (req, res) => {
  try {
    const { name, price, description, restaurantId } = req.body;
    const food = await Food.create({ name, price, description, restaurantId, createdBy: req.user.id });

    res.status(201).send({ message: "Food item created", food });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getFoodsByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const foods = await Food.find({ restaurantId });

    res.status(200).send({ foods });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createFood, getFoodsByRestaurant };
