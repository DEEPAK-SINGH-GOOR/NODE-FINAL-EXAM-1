const Restaurant = require("../model/Restaurant");
const User = require("../model/User");

const createres = async (req, res) => {
  try {
    const { name, location } = req.body;
    if(req.user.role == "superadmin"){
      const restaurant = await Restaurant.create({ name, location, createdBy: req.user.id });
    res.status(201).send({ message: "Restaurant created", restaurant });
    }
    else{
      res.status(400).send({ message: "You Are Not able" });
    }
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

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;

  if (req.user.role === "superadmin") {
    try {
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        id,
        { name, location },
        { new: true }
      );

      if (!updatedRestaurant) {
        return res.status(404).send({ message: "Restaurant not found" });
      }

      res.status(200).send({ message: "Restaurant updated", restaurant: updatedRestaurant });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(403).send({ message: "Unauthorized access" });
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  if (req.user.role === "superadmin") {
    try {
      const deletedRestaurant = await Restaurant.findByIdAndDelete(id);

      if (!deletedRestaurant) {
        return res.status(404).send({ message: "Restaurant not found" });
      }

      res.status(200).send({ message: "Restaurant deleted" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(403).send({ message: "Unauthorized access" });
  }
};

const assignAdmin = async (req, res) => {
  const { id } = req.params;
  const { adminId } = req.body;

  if (req.user.role === "superadmin") {
    try {
      const restaurant = await Restaurant.findById(id);

      if (!restaurant) {
        return res.status(404).send({ message: "Restaurant not found" });
      }

      const admin = await User.findById(adminId);

      if (!admin) {
        return res.status(404).send({ message: "Admin user not found" });
      }

      if (!restaurant.admins.includes(adminId)) {
        restaurant.admins.push(adminId);
        await restaurant.save();
      }

      res.status(200).send({ message: "Admin assigned", restaurant });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(403).send({ message: "Unauthorized access" });
  }
};

module.exports = {
  createres,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
  assignAdmin,
};