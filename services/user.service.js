const { db } = require("../configs/firebase");
const { collection, addDoc } = require("firebase/firestore");

const vehicleRegisterService = async (vehicleData) => {
  try {
    const vehicleCollection = collection(db, "registered-vehicles");
    const docRef = await addDoc(vehicleCollection, vehicleData);
    console.log("Vehicle added with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding vehicle:", error);
  }
};

module.exports = { vehicleRegisterService };
