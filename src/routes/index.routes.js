const express = require('express');
const routes = express.Router(); 

const productRouter = require('./products.routes');
const userRouter = require('./users.routes');

routes.get('/', (req, res) => res.send("ESTAS EN HOME"));
routes.use('/products', productRouter);
routes.use('/users', userRouter);

module.exports = routes;