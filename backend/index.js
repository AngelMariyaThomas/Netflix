
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database");

    app.use(express.json()); // Add this line before your routes.

    app.use("/api/auth", authRoute);

    app.listen(8800, () => {
      console.log("Backend server is running");
    });
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
}
