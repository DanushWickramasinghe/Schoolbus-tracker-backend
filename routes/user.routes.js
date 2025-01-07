const express = require("express");
const router = express.Router();
const {
  registerBus,
  viewVehicleDetails,
} = require("../controllers/user.controller");

// Register vehicle
router.post("/bus-owner/register-bus", registerBus);
router.get("/registered-vehicles", viewVehicleDetails);

module.exports = router;
