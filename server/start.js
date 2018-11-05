//import mongoose
const mongoose =require("mongoose");
//mongo db connection string 51293 port and data base name products
const url= "mongodb://ecommerce-project:ecommerce123@ds151293.mlab.com:51293/ecommerce-project";
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