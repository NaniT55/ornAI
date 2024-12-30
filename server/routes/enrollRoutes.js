const express = require("express");

const { enrollForm } = require("../controllers/enrollController.js");

const router = express.Router();

router.post("/enrollForm", enrollForm);

// router.post("/login", login);

module.exports = router;
