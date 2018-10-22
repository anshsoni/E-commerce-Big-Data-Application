const express = require("express");
const Product =require("../model/models");
const router = express.Router();

router.get('/', (req, res) => {
    Product.find({},function(err,data){
      if(err){
          console.log(`error is ${err.message}`)
      }
      const something = `this is the  JSON file : ${data}`  ;
      res.send(something);
      });
  });
  console.log(`this is route.js`);
  module.exports = router;
