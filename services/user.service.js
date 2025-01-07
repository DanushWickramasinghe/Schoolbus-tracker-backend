const { db } = require("../configs/firebase");
const { collection, addDoc, query, getDocs } = require("firebase/firestore");
const RegisteredVehicle = require("../models/registeredVehicle.model");

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

module.exports = { vehicleRegisterService, viewVehicleDetailsService };
