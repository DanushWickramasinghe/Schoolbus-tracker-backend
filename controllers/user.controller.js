const {
  vehicleRegisterService,
  viewVehicleDetailsService,
  viewBusOwnerDetailsService,
  viewPassengerDetailsService,
  viewAdminDetailsService,
} = require("../services/user.service");

const registerBus = async (req, res) => {
  try {
    const vehicleData = req.body;
    const newvehicle = await vehicleRegisterService(vehicleData);
    if (newvehicle) {
      return res.status(200).json({
        message: "New vehicle registered successfully",
        newvehicle,
      });
    }
    return res.status(400).json({
      message: "Registration process did not succeed.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const viewVehicleDetails = async (req, res) => {
  try {
    console.log("Fetching registered vehicles at backend...");
    const registeredvehicles = await viewVehicleDetailsService();
    if (registeredvehicles) {
      console.log(registeredvehicles);
      return res.status(200).json({
        message: "Registered vehicles fetched successfully",
        registeredvehicles,
      });
    }
    return res.status(400).json({
      message: "Fetching registered vehicles did not succeed.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const viewBusOwnerDetails = async (req, res) => {
  try {
    console.log("Fetching bus owner details at backend...");
    const busOwnerDetails = await viewBusOwnerDetailsService();
    if (busOwnerDetails) {
      console.log(busOwnerDetails);
      return res.status(200).json({
        message: "Bus owner details fetched successfully",
        busOwnerDetails,
      });
    }
    return res.status(400).json({
      message: "Fetching bus owner details did not succeed.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const viewPassengerDetails = async (req, res) => {
  try {
    console.log("Fetching passenger details at backend...");
    const passengerDetails = await viewPassengerDetailsService();
    if (passengerDetails) {
      console.log(passengerDetails);
      return res.status(200).json({
        message: "Passenger details fetched successfully",
        passengerDetails,
      });
    }
    return res.status(400).json({
      message: "Fetching passenger details did not succeed.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const viewAdminDetails = async (req, res) => {
  try {
    console.log("Fetching admin details at backend...");
    const adminDetails = await viewAdminDetailsService();
    if (adminDetails) {
      console.log(adminDetails);
      return res.status(200).json({
        message: "Admin details fetched successfully",
        adminDetails,
      });
    }
    return res.status(400).json({
      message: "Fetching admin details did not succeed.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  registerBus,
  viewVehicleDetails,
  viewBusOwnerDetails,
  viewPassengerDetails,
  viewAdminDetails,
};
