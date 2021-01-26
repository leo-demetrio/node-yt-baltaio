const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const config = require('./config');


//conexão bd
const urlMongo = config.connectionString;
const options = {  poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true}
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connection.on('error', (error) => {
	console.log(error);
});
mongoose.connection.on('disconnected', (error) => {
	console.log("Desconectado", error);
});
mongoose.connection.on('connected', (error) => {
	console.log("Conectado");
});
mongoose.connect(urlMongo,options);

//config body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//carregamento de Models
require('./models/productsModel');
require('./models/customersModel');
require('./models/orderModel');


//carregamento de Rotas
//const index = require('./routes/index');
//const productRouter = require('./routes/products/productRouter');
//app.use('/home', index);
app.use('/home', require('./routes/index'));
app.use('/produtos', require('./routes/products/productRouter'));
app.use('/clientes', require('./routes/customer/customerRouter'));
app.use('/pedidos', require('./routes/order/orderRouter'));





module.exports = app;