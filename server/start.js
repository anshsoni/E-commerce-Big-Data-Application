//import mongoose
const mongoose =require("mongoose");
//mongo db connection string 27017 port and data base name products
const url= "mongodb://localhost:27017/products";
//use mongoose to connecto to the database products
mongoose.connect(url)
const db = mongoose.connection;
//connection check events
db.on('connected', () => {
    console.log(`Mongoose connected succesfully`);
  }).on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
console.log(`this is start.js`);