const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//conexão bd
const urlMongo = 'mongodb+srv://user_admin:20202020@cluster0.hw2cr.mongodb.net/Cluster0?retryWrites=true&w=majority';
 const options = {  poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true}
mongoose.set('useCreateIndex', true);
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

//carregamento de rotas
const index = require('./routes/index');
const productRouter = require('./routes/products/productRouter');
app.use('/home', index);
app.use('/produtos', productRouter);




module.exports = app;