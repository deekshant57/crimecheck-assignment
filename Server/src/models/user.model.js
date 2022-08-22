const mongoose = require("mongoose");

// create a schema for users

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
