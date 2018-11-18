const start = require("../start");
const express = require("express");
const Product = require("../model/models");
const router = express.Router(); 


let bulk = [];
Product.find({}, function (err, data) {

// console.log(data);
  data.forEach(item => {
    bulk.push({
      index: {
        _index: "ecommerce-products",
        _type: "items_list",
      }
  
    })
    let obj={
      title : item.title,
      json: item
    }
    bulk.push(obj)
    // console.log(item['price'])
  })

  start.bulk({ body: bulk }, function (err, response) {
    if (err) {
      console.log("Failed Bulk operation".red, err)
    } else {
      console.log("Successfully imported %s".green, bulk.length);
    }
  });
})



router.get('/products', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Product.find({}, function (err, data) {
    if (err) {
      console.log(`error is ${err.message}`)
    }
    res.status(200).send({
      success: 'true',
      message: 'successful',
      items: data
    })
  });
});

router.get('/products/:id', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const query =  {id: parseInt(req.params.id)}
  console.log(query)
  Product.findOne(query, function (err, data) {
    console.log(data);
    if (err) {
      console.log(`error is ${err.message}`)
    }
    res.status(200).send({
      success: 'true',
      message: 'successful',
      items: data
    })
  });
});


router.get('/search', function (req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  // console.log(req);
  let body = {
    size: 10,
    from: 0, 
    query: {
      match: {
          title: req.query['q']
      }
    }
  }
  console.log(body);
  start.search({index:'ecommerce-products',  body:body, type:'items_list'})
  .then(results => {
    console.log(results);
    res.send(results.hits.hits);
  })
  .catch(err=>{
    console.log(`error:${err}`)
    res.send([]);
  });
  
})


console.log(`this is route.js`);
module.exports = {
  router :router,
  elastic:start
};
