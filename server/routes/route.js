const express = require("express");
const Product =require("../model/models");
const router = express.Router();


  router.get('/products', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Product.find({},function(err,data){
              if(err){
                  console.log(`error is ${err.message}`)
              }
              res.status(200).send({
                success: 'true',
                message: 'successful',
                items: data
              })
              });
  });
  console.log(`this is route.js`);
  module.exports = router;
