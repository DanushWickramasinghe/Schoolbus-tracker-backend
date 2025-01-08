const { db } = require("../configs/firebase");
const { collection, addDoc, query, getDocs } = require("firebase/firestore");
const RegisteredVehicle = require("../models/registeredVehicle.model");
const User = require("../models/user.model");

// const vehicleRegisterService = async (vehicleData) => {
//   try {
//     console.log("Came here");
//     const vehicleCollection = collection(db, "registered-vehicles");
//     const docRef = await addDoc(vehicleCollection, vehicleData);
//     console.log("Vehicle added with ID:", docRef.id);
//     return docRef;
//   } catch (error) {
//     console.error("Error adding vehicle:", error);
//   }
// };

const vehicleRegisterService = async (vehicleData) => {
  try {
    console.log("Processing vehicle registration...");
    const newVehicle = await RegisteredVehicle.create(vehicleData);
    console.log("Vehicle registered with ID:", newVehicle.vehicle_number);
    return newVehicle;
  } catch (error) {
    console.log("Error adding vehicle registration details:", error);
  }
};

const viewVehicleDetailsService = async () => {
  try {
    console.log("Fetching vehicle details from DB...");
    const vehicles = await RegisteredVehicle.findAll();
    console.log("Fetched vehicle details:", vehicles);
    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicle details:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

const viewBusOwnerDetailsService = async () => {
  try {
    console.log("Fetching bus owner details from DB...");
    const busOwners = await User.findAll({ where: { role: "DRIVER" } });
    console.log("Fetched bus owner details:", busOwners);
    return busOwners;
  } catch (error) {
    console.error("Error fetching bus owner details:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

const viewPassengerDetailsService = async () => {
  try {
    console.log("Fetching passenger details from DB...");
    const passengers = await User.findAll({ where: { role: "PASSENGER" } });
    console.log("Fetched passenger details:", passengers);
    return passengers;
  } catch (error) {
    console.error("Error fetching passenger details:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

const viewAdminDetailsService = async () => {
  try {
    console.log("Fetching admin details from DB...");
    const admins = await User.findAll({ where: { role: "ADMIN" } });
    console.log("Fetched admin details:", admins);
    return admins;
  } catch (error) {
    console.error("Error fetching admin details:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

module.exports = {
  vehicleRegisterService,
  viewVehicleDetailsService,
  viewBusOwnerDetailsService,
  viewPassengerDetailsService,
  viewAdminDetailsService,
};
