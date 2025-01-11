const express = require("express");
const router = express.Router();
const {
  registerBus,
  viewVehicleDetails,
  viewBusOwnerDetails,
  viewPassengerDetails,
  viewAdminDetails,
  viewDashboardData,
} = require("../controllers/user.controller");

// Register vehicle
router.post("/bus-owner/register-bus", registerBus);
router.get("/registered-vehicles", viewVehicleDetails);
router.get("/bus-owner-data", viewBusOwnerDetails);
router.get("/passenger-data", viewPassengerDetails);
router.get("/admin-data", viewAdminDetails);
router.get("/dashboard-data", viewDashboardData);

module.exports = router;
