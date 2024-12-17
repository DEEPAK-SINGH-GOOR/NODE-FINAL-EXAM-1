const Restaurant = require("../model/Restaurant");

const createres = async (req, res) => {
  try {
    const { name, location } = req.body;
    const restaurant = await Restaurant.create({ name, location, createdBy: req.user.id });
    res.status(201).send({ message: "Restaurant create", restaurant });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).send({ restaurants });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = { createres, getRestaurants };
