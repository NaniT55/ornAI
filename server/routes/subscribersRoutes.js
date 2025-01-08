const express = require("express");

const { submitSubscriber } = require("../controllers/subscriberController.js");

const router = express.Router();

router.post("/subscribe", submitSubscriber);

// router.post("/login", login);

module.exports = router;
