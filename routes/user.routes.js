const express = require("express");
const router = express.Router();
const {
  registerBus,
  viewVehicleDetails,
  viewBusOwnerDetails,
  viewPassengerDetails,
} = require("../controllers/user.controller");

// Register vehicle
router.post("/bus-owner/register-bus", registerBus);
router.get("/registered-vehicles", viewVehicleDetails);
router.get("/bus-owner-data", viewBusOwnerDetails);
router.get("/passenger-data", viewPassengerDetails);

module.exports = router;
