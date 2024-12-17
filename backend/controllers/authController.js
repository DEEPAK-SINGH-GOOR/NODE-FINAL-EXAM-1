require("dotenv").config()
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(req.body);
    
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    
    if (existingUser) {

      return res.status(400).send({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password, role });
    console.log(user);
    
    const token = jwt.sign({ id: user._id.toString(), role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log(token);
    user.tokens = user.tokens.concat({token})
    await user.save();
    console.log(user);
    res.status(201).send({ message: "User created", token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { Signup, Login };
