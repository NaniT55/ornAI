const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//routes
const authRoutes = require("./routes/authRoutes.js");

//database
const connectToDB = require("./db/connectToDB.js");

const app = express();

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  connectToDB(MONGODB_URI);
  console.log(`Server is running on port at http://localhost:${PORT}`);
});
