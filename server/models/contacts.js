const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);

// const { Schema, model } = require("mongoose");

// const contactSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// });

// const Contact = model("Contact", contactSchema);
// module.exports = Contact;
