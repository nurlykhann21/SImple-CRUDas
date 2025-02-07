const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// Log credentials (without password for security reasons)
console.log("MongoDB connection details:");
console.log("DB_USER:", DB_USER);
console.log("DB_HOST:", DB_HOST);
console.log("DB_NAME:", DB_NAME);

// Construct MongoDB URI (do not log the password)
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
console.log("MONGO_URI:", MONGO_URI);
// Connect DB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/user", require("./routes/user"));

app.listen(5000, () => console.log("Server is running on port 5000"));
