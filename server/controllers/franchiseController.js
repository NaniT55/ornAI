const dotenv = require("dotenv");
dotenv.config();

const Franchise = require("../models/franchise"); // Ensure this points to your contact model

const FranchiseForm = async (req, res, next) => {
  try {
    console.log("Request body:", req.body); // Log incoming data
    const { fullname, email, phone, address } = req.body;

    if (!fullname || !email || !phone || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newFranchiseForm = await Franchise.create({
      fullname,
      email,
      phone,
      address,
    });
    console.log("New enrollUser saved:", newFranchiseForm); // Log saved contact

    res.status(201).json({
      message: "franchise information submitted successfully!",
      data: newFranchiseForm,
    });
  } catch (err) {
    console.error("Error in FranchiseForm:", err); // Log errors
    next(err);
  }
};

module.exports = {
  FranchiseForm,
};

// const dotenv = require("dotenv");
// dotenv.config();

// const Contact = require("../models/contacts"); // Ensure this points to your contact model

// const submitContactInfo = async (req, res, next) => {
//   try {
//     console.log("Request body:", req.body); // Log incoming data
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     const newContact = await Contact.create({ name, email, message });
//     console.log("New contact saved:", newContact); // Log saved contact

//     res.status(201).json({
//       message: "Contact information submitted successfully!",
//       data: newContact,
//     });
//   } catch (err) {
//     console.error("Error in submitContactInfo:", err); // Log errors
//     next(err);
//   }
// };

// module.exports = {
//   submitContactInfo,
// };
