require('dotenv').config();

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },

  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    messurmentId: process.env.FIREBASE_MESSUREMENT_ID,
  },

  admin: {
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
    adminRole: process.env.ADMIN_ROLE,
    adminName: process.env.ADMIN_NAME,
    adminMobile: process.env.ADMIN_MOBILE_NUMBER,
    adminDateOfBirth: process.env.ADMIN_DATE_OF_BIRTH,
    adminAddress: process.env.ADMIN_ADDRESS,
  },

  jwt: {
    refreshTokenSecret: process.env.JWT_SECRET_REFRESH_TOKEN,
    accessTokenSecret: process.env.JWT_SECRET_ACCESS_TOKEN,
  },

  gmail: {
    email: process.env.EMAIL,
    trackmyrideEmail: process.env.TRACKMYRIDE_EMAIL,
    trackmyridePassword: process.env.TRACKMYRIDE_EMAIL_PASSWORD,
  },
};
