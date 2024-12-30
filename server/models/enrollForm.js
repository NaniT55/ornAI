const mongoose = require("mongoose");

const enrollUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("enrollUserForm", enrollUserSchema);