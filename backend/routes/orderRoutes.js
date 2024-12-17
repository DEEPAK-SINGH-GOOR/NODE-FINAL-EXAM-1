const express = require("express");
const orderRouter = express.Router();
const { createOrder, getOrderByUser, updateOrderStatus } = require("../controllers/orderController");

orderRouter.post("/", createOrder);            
orderRouter.get("/:userId", getOrderByUser);  
orderRouter.put("/:id", updateOrderStatus);    

module.exports = orderRouter;
