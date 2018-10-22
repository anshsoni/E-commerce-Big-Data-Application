const mongoose =require("mongoose");

//define a new schema object i.e model of our the database
const Schema=mongoose.Schema;
const ModelSchema = new Schema({
_id:Number,
title:String,
slogan:String,
description:String,
stars:Number,
category:String,
img_url:String,
price: Number
});
// use mogoose.model to create a copy of schema for crud operations in node
const Product=mongoose.model('products',ModelSchema);


  console.log(`this is models.js`);

  //export Product
module.exports=Product;