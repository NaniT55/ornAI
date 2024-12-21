const dotenv = require("dotenv");
dotenv.config();

const Contact = require("../models/contacts.js"); // Ensure this points to your contact model

const submitContactInfo = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Validate that all fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Save the contact information in the database
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    // Respond with success message
    res.status(201).json({
      message: "Contact information submitted successfully!",
      data: { name, email, message },
    });
  } catch (err) {
    // Handle errors
    next(err);
  }
};

module.exports = {
  submitContactInfo,
};
