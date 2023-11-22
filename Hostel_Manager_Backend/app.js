const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const parentRoutes = require("./routes/parentRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const guardianRoutes = require("./routes/guardianRoutes");

const { MONGODB_URI } = require("./config/env");

const app = express();
app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://hostel-manager-admin.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // Add Authorization header
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use("/api/students", studentRoutes);
app.use("/api/parents", parentRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/guardian", guardianRoutes);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
