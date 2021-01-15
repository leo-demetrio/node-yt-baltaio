'use strict'
const mongoose = require('mongoose');
const Product = require('./../models/productsModel');
const Validator = require('./../validators/fluent-validator');
//const Product = mongoose.model('Product');


exports.get = async (req,res,next) => {

	try {

	const productAll = await Product.find({}, 'title price slug');
	if(productAll.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
	return	res.status(200).send(productAll);

	} catch (e) {
		return res.status(400).send({message: 'Nada achado'});
		console.log(e);
	}
	
}
exports.getBySlug = async (req,res,next) => {

	try {
			
		const slug = await Product.findOne({slug: req.params.slug}, 'title price slug');
		if(slug.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
		return	res.status(200).send(slug);

	} catch (e) {
		console.log(e);
		return res.status(400).send({message: 'Nada achado byslug'});
		
	}
	
}
exports.getById = async (req,res,next) => {

	try {
			
		const slug = await Product.findById(req.params.id);
		if(slug.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
		return	res.status(200).send(slug);

	} catch (e) {
		console.log(e);
		return res.status(400).send({message: 'Nada achado byslug'});
		
	}
	
}
exports.getByTag = async (req,res,next) => {

	try {
			
		const tag = await Product.find({tags: req.params.tag});
		if(tag.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
		return	res.status(200).send(tag);

	} catch (e) {
		console.log(e);
		return res.status(400).send({message: 'Nada achado byslug'});
		
	}
	
}
exports.post = (req,res,next) => {	

	let contract = new Validator();
	contract.isRequired(req.body.title, "O titulo é requerido");

	if(!contract.isValid()) return res.status(400).send(contract.errors()).end();
	//return;

	var product = new Product(req.body);		
	//devolve uma promisse save()
	product
	.save()
	.then((valor) => res.status(201).send({message: 'Criado'}))
	.catch(e => res.status(400).send({message: 'Não criado', data: e}));	
	
}


exports.put = async (req,res,next) => {	
	try {	

	//new true para devolver o valor atualizado
	const result = await Product.findByIdAndUpdate(req.params.id,req.body, {new: true});
	console.log(result);
	return res.status(200).send({message: 'não encontrou',result});

	} catch (e) {
		console.log(e)
		return res.status(400).send({message: 'Não foi possível atualizar'});
	}

}
exports.delete = async (req,res,next) => {	 
	// const _id = req.params._id;
	try {

	const result = await Product.findOneAndRemove(req.body.id);
	res.status(200).send(result);

} catch (e) {
	return res.status(400).send({message: 'Nada excluído'});
	console.log(e);
}
}
