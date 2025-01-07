const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// import the database connection
const sequelize = require("./configs/db");

// create admin
const createAdmin = require("./configs/admin");

// import the routes
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(bodyParser.json());

const port = 8000;

// Use CORS middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Allow only requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods if needed
    credentials: true, // Include this if you need to send cookies or other credentials
  })
);

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  // run the coomand "npm run dev" start backend using the nodemon
  res.send("This is School Bus Tracker Backend!");
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     createAdmin();
//     console.log("Database connected and models synchronized");
//   })
//   .catch((err) => console.error("Error connecting to the database:", err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
