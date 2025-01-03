const express = require("express");
const router = express.Router();
const { registerBus } = require("../controllers/user.controller");

// POST route to register a user
router.post("/bus-owner/register-bus", registerBus);

module.exports = router;
