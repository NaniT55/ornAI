const express = require("express");

const {
  submitContactInfo,
} = require("../controllers/contactInfoController.js");

const router = express.Router();

router.post("/contact", submitContactInfo);

// router.post("/login", login);

module.exports = router;
