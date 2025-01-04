const { db } = require("../configs/firebase");
const { collection, addDoc, query, getDocs } = require("firebase/firestore");

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
