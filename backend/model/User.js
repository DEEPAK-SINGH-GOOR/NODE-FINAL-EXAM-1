const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true },
  role: { type: String, enum: ["superadmin", "admin", "user"], default: "user" },
  restaurantId: { type: mongoose.Schema.Types.ObjectId},
  tokens : [{
    token : {
      type : String,
      required : true
    }
  }]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
