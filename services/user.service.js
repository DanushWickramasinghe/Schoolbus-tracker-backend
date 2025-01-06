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
    const registeredVehicleListRef = collection(db, "registered-vehicles");
    const q = query(registeredVehicleListRef);
    const querySnapshot = await getDocs(q);

    const vehicles = querySnapshot.docs.map((doc) => ({
      vehicleid: doc.id,
      NICnumber: doc.data().NICnumber,
      ownername: doc.data().ownerName,
      vehiclemodel: doc.data().vehicleModel,
      vehiclenumber: doc.data().vehicleNumber,
      vehicletype: doc.data().vehicleType,
    }));
    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicle details:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

module.exports = { vehicleRegisterService, viewVehicleDetailsService };
