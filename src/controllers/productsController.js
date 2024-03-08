let productos = require('../models/products');
const path = require('path');

const productsController = { 
getAll: (req, res) => res.render('index', {products: productos.getAll()}),
getOne: (req, res) => res.render('productDetail', {product: productos.getOneBy(req.params.id)}),
}

module.exports = productsController;
