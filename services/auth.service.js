const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { auth } = require("../configs/firebase");

const registerService = async (username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const loginService = async (email, password) => {
  console.log(email, password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = { registerService, loginService };
