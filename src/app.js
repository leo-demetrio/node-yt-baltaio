const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

//carregamento de rotas
const index = require('./routes/index');
const productRouter = require('./routes/products/productRouter');
app.use('/home', index);
app.use('/produtos', productRouter);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))







module.exports = app;