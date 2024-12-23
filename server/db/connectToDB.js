const mongoose = require("mongoose");

const connectToDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database");
  } catch (err) {
    console.log("Failed to connect to the database", err);
    process.exit(1);
  }
};

module.exports = connectToDB;
