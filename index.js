//======= require all dependencies
require("dotenv").config();
const express = require("express");
const app = express();
//=== add all middlewares
require("./config/db"); //calls my mongoose connection to cleanup this file
app.use(express.json()); //allows me to receive JSON files from HEADER of REQUEST
//=== setup my routes

//=== 404 errors
app.get("*", (req, res) => {
  res.status(404).json({ message: "estas perdido", code: "EB404" });
});
//=== setup the server port
app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
