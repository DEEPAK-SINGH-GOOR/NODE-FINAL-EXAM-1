const {Router} = require('express');
const { Signup, Login } = require('../controllers/authController');
const authrouter = Router();

authrouter.post('/signup', Signup);
authrouter.post('/login', Login);

module.exports = authrouter;
