'use strict'
const mongoose = require('mongoose');
const Product = require('./../models/productsModel');
//const Product = mongoose.model('Product');


exports.get = (req,res,next) => {
	res.status(200).send({
		title: "Node Store Api get",
		varsion: "0.0.1"
	});
}
exports.post = (req,res,next) => {	
	let product = new Product(req.body);
	//devolve uma promisse
	product
	.save()
	.then((valor) => res.staus(201).send({message: 'Criado',product}))
	.catch(e => res.status(400).send({message: 'Não criado', data: e}));	
	//res.status(201).send(req.body);
}
exports.put = (req,res,next) => {	 
	const id = req.params.id;
	res.status(200).send({id});
}
exports.delete = (req,res,next) => {	 
	const id = req.params.id;
	res.status(200).send({id});
}
