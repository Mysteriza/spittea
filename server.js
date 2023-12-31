require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const connectDB = require("./config/dbConnect");
const mongoose = require("mongoose");

const PORT = 3500;

connectDB();

app.use(
  express.json({
    type: "*/*",
  })
);

app.use("/", express.static(path.join(__dirname, "public/assets")));

// Perbaikan path require untuk file root.js
app.use("/", require("./routes/root.js"));
app.use("/users", require("./routes/userRoutes"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Database!");
  app.listen(PORT, () =>
    console.log(`Your server online on PORT ${PORT}!`)
  );
});
