let productos = require('../models/products');

const productsController = { 
    getAll: (req, res) => res.send("Estas viendo el listasdo de productos"),
    getOne: (req, res) => res.send(productos.find((producto)=> producto.id == req.params.id))
}

module.exports = productsController;
