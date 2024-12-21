const dotenv = require("dotenv");
dotenv.config();

const Contact = require("../models/contacts"); // Ensure this points to your contact model

const submitContactInfo = async (req, res, next) => {
  try {
    console.log("Request body:", req.body); // Log incoming data
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newContact = await Contact.create({ name, email, message });
    console.log("New contact saved:", newContact); // Log saved contact

    res.status(201).json({
      message: "Contact information submitted successfully!",
      data: newContact,
    });
  } catch (err) {
    console.error("Error in submitContactInfo:", err); // Log errors
    next(err);
  }
};

module.exports = {
  submitContactInfo,
};
