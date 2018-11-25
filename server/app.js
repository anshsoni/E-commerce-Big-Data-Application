const express = require("express");
const routes = require("./routes/route");
const app = express();
const elastic = routes.elastic;


//Not efficient way ,but serves the purpose
elastic.indices.delete({
  index: '_all'
}, function(err, res) {

  if (err) {
      console.error('Index doesnt exist');
  } else {
      console.log('Indexes have been deleted!');
  }
});
//deleting and recreating index from mongo db everytime a change is made
elastic.indices.create({
  index: 'ecommerce-products'
}, function (error, response, status) {
  if (error) {
    console.log(error);
  } else {
    console.log("created new index", response);
  }
});

app.use('/', routes.router);
console.log(`this is app.js`);
//create an express server for web 
const server = app.listen(5000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});



module.exports = app;