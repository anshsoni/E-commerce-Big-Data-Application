const express = require("express");
const start = require("./start");
const routes = require("./routes/route");
const app = express();
app.use('/', routes);
console.log(`this is app.js`);
//create an express server for web 
 const server = app.listen(5000, () => {
    console.log(`Express is running on port ${server.address().port}`);
  });
module.exports = app;