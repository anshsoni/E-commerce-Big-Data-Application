//import mongoose
const mongoose =require("mongoose");
//mongo db connection string 51293 port and data base name products
const url= "mongodb://ecommerce-project:ecommerce123@ds151293.mlab.com:51293/ecommerce-project";
//use mongoose to connecto to the database products


const elasticsearch = require('elasticsearch');

mongoose.connect(url)
const db = mongoose.connection;
//connection check events
db.on('connected', () => {
    console.log(`Mongoose connected succesfully`);
  }).on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
console.log(`this is start.js`);


const client = new elasticsearch.Client({
   hosts: [ 'https://elastic:NVUxmGxuT9VTW46Wsavv57Fr@2f4920c33362446ebd5ef8e6b5302535.us-east-1.aws.found.io:9243']
});

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
});

module.exports = client;
