const { Router } = require("express");
const authenticate = require("../middleware/authMiddleware");

const { createres, getRestaurants, updateRestaurant, deleteRestaurant, assignAdmin } = require("../controllers/restaurantController")
const restaurantRouter = Router();

restaurantRouter.post("/",authenticate, createres);     
restaurantRouter.get("/", getRestaurants);      
restaurantRouter.put("/:id",authenticate, updateRestaurant);   
restaurantRouter.delete("/:id",authenticate, deleteRestaurant);  
restaurantRouter.post("/:id/assign/admin", authenticate , assignAdmin);  
module.exports = restaurantRouter;
