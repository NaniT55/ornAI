const express = require("express");
const { FranchiseForm } = require("../controllers/franchiseController");

const router = express.Router();

router.post("/franchiseForm", FranchiseForm);

// router.post("/login", login);

module.exports = router;
