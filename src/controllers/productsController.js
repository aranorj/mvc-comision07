let productos = require('../models/products');
const path = require('path');

const productsController = { 
    getAll: (req, res) => res.sendFile(path.resolve(__dirname, '../views/index.html')),
    getOne: (req, res) => res.send(`Estas viendo el detalle del producto nro ${req.params.id}`),
}

module.exports = productsController;
