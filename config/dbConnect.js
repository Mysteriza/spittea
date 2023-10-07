const mongoose = require("mongoose");

const connectOptions = {
  dbName: "spittea",
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DATABASE_URI, connectOptions);
  } catch (error) {
    console.log(error);
  } 
};

module.exports = dbConnect;
