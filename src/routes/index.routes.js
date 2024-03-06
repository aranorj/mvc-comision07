const express = require('express');
const routes = express.Router(); 
const path = require('path');

const productRouter = require('./products.routes');
const userRouter = require('./users.routes');

routes.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../views/index.html')));
routes.use('/products', productRouter);
routes.use('/users', userRouter);

module.exports = routes;