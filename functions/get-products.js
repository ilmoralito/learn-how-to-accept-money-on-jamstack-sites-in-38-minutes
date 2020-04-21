const products = require("./data/products.json");

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify(products),
});
