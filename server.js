const express = require("express");
const bodyParser = require("body-parser");

// import `all files` from `routes` folder 
const route = require("./routes/route"); 

// create new app
const app = express();

// PORT
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


/**
 * Router Middleware
 * Router - /*
 */
app.use("/", route);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
