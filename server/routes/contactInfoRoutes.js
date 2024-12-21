const express = require("express");

const {
  submitContactInfo,
} = require("../controllers/contactInfoController.js");

const router = express.Router();

router.post("/contacts", submitContactInfo);

// router.post("/login", login);

module.exports = router;
