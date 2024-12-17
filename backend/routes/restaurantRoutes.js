const express = require("express");
const restaurantRouter = express.Router();
const { createresturent, getAllresturents, updateresturent, deleteresturent } = require("../controllers/restaurantController");
restaurantRouter.post("/", createresturent);     
restaurantRouter.get("/", getAllresturents);      
restaurantRouter.put("/:id", updateresturent);   
restaurantRouter.delete("/:id", deleteresturent);  
module.exports = restaurantRouter;
