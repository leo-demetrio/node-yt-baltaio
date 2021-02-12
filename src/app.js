const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const config = require('./config');
//require('./configMongoose');


//conexão bd config mongoose
require('./configMongoose');


//config body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//carregamento de Models
require('./models');


//carregamento de Rotas
//const index = require('./routes/index');
//const productRouter = require('./routes/products/productRouter');

app.use('/', require('./routes/index'));
app.use('/produtos', require('./routes/products/productRouter'));
app.use('/clientes', require('./routes/customer/customerRouter'));
app.use('/pedidos', require('./routes/order/orderRouter'));





module.exports = app;