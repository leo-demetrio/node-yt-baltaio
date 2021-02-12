const mongoose = require('mongoose');
const config = require('./config');

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

module.exports = mongoose;

//Modelo antigo na app.js
// const urlMongo = config.connectionString;
// const options = {  poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true}
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

// mongoose.connection.on('error', (error) => {
// 	console.log(error);
// });
// mongoose.connection.on('disconnected', (error) => {
// 	console.log("Desconectado", error);
// });
// mongoose.connection.on('connected', (error) => {
// 	console.log("Conectado");
// });
// mongoose.connect(urlMongo,options);