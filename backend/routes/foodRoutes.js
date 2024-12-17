const express = require("express");
const foodRouter = express.Router();
const { addFood, getFoodByRestaurant, updateFood, deleteFood } = require("../controllers/foodController");

foodRouter.post("/:restaurantId", addFood);        
foodRouter.get("/:restaurantId", getFoodByRestaurant);
foodRouter.put("/:id", updateFood);                
foodRouter.delete("/:id", deleteFood);             
module.exports = foodRouter;
