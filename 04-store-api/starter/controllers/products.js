const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
const products = await Product.find({})
  res.status(200).json({ products} )
}

const getAllProducts = async (req,res) => {
const { featured, company, name } = req.query;
// instead of passing directly req.query we set up a new obj and first we just pull out the properties we're interested and then we'll check if property actually coming in with a request - awesome we'll set up a new prop on our queryObj 
const queryObj = {};
if (featured) {
  queryObj.featured = featured === 'true' ? true : false;
} if (company) queryObj.company = company;
if (name) queryObj.name = name;

  const products = await Product.find(queryObj);
  res.status(200).json({products, nbHits: products.length })
}

module.exports = {
  getAllProducts, getAllProductsStatic
}