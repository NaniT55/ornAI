const dotenv = require("dotenv");
dotenv.config();

const Subscriber = require("../models/subscribers"); // Ensure this points to your contact model

const submitSubscriber = async (req, res, next) => {
  try {
    console.log("Request body:", req.body); // Log incoming data
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newSubscriber = await Subscriber.create({ email });
    console.log("New subscriber saved:", newSubscriber); // Log saved contact

    res.status(201).json({
      message: "Subscriber information submitted successfully!",
      data: newSubscriber,
    });
  } catch (err) {
    console.error("Error in submitSubscriber:", err); // Log errors
    next(err);
  }
};

module.exports = {
  submitSubscriber,
};
