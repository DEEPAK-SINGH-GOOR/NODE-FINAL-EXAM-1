const userRouter  = require('express').Router();
const { Signup, Login, GetUser, deleteUser, verifyUser } = require("../controllers/authController");

userRouter.post("/signup", Signup);  
userRouter.post("/login", Login);    
userRouter.get("/", GetUser);        
userRouter.delete("/delete/:id", deleteUser); 
userRouter.get("/verify/:token", verifyUser); 

module.exports = userRouter;

