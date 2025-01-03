const { vehicleRegisterService } = require("../services/user.service");

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

module.exports = {
  registerBus,
};
