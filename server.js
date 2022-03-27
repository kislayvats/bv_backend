const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
// backend will start reading .env file
require("dotenv").config();

app.use(cors());
const httpServer = http.createServer(app);
// DATABASE CONNECT
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => console.log("DB Connection err", err));

// ROUTES
app.use("/api", require("./routes/user"));

app.get("*", (req, res) => {
  res.send("You came to the wrong place!! it is not defined");
});

const port = process.env.PORT || 8000;

httpServer.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
