'use strict'
//const mongoose = require('mongoose');
//const Product = require('./../models/productsModel');
//const Product = mongoose.model('Product');
const Validator = require('./../validators/fluent-validator');
const productRepository = require('./../repositories/productsrepository');


exports.get = async (req,res,next) => {

	try {

	const productAll = await productRepository.get();

	if(productAll.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
	return	res.status(200).send(productAll);

	} catch (e) {
		return res.status(400).send({message: 'Nada achado'});
		console.log(e);
	}
	
}
exports.getBySlug = async (req,res,next) => {

	try {
			
		const slug = await productRepository.getBySlug(req.params.slug);
		if(slug.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
		return	res.status(200).send(slug);

	} catch (e) {
		console.log(e);
		return res.status(500).send({message: 'Nada achado byslug'});
		
	}
	
}
exports.getById = async (req,res,next) => {

	try {
		
		const id = await productRepository.getById(req.params.id);
		if(id.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
		return	res.status(200).send(id);

	} catch (e) {
		console.log(e);
		return res.status(400).send({message: 'Nada achado byid'});
		
	}
	
}
exports.getByTag = async (req,res,next) => {

	try {
			
		const tag = await productRepository.getByTag(req.params.tag);
		if(tag.length === 0) return res.status(200).send({message: "Nenhum produto encontrado"});
		return	res.status(200).send(tag);

	} catch (e) {
		console.log(e);
		return res.status(400).send({message: 'Nada achado byslug'});
		
	}
	
}
exports.post = async (req,res,next) => {	

	try {

		let contract = new Validator();
		contract.isRequired(req.body.title, "O titulo é requerido");

		if(!contract.isValid()) return res.status(400).send(contract.errors()).end();
	

		var product = await productRepository.create(req.body);	
		if(product.length === 0) res.status(400).send({message: 'Não criado', data: e});

		return res.status(201).send({message: 'Criado',product});


		} catch (e) {
			console.log(e);
			return res.status(400).send({message: 'Não criado'});
			
		}
}


exports.put = async (req,res,next) => {	
	try {	

	//new true para devolver o valor atualizado
	const result = await productRepository.update(req.params.id,req.body);
	
	if(result.length === 0) res.status(400).send({message: 'não encontrou',result});
	return res.status(200).send({message: 'Atualizado',result});

	} catch (e) {
		console.log(e)
		return res.status(400).send({message: 'Não foi possível atualizar'});
	}

}
exports.delete = async (req,res,next) => {	 

	try {

		if(req.body.id === undefined) res.status(400).send({message: "Não foi possível excluir"});

		const result = await productRepository.delete(req.body.id);

		res.status(200).send(result);

	} catch (e) { fcatch(e,400,"Nada excluído",res); }
	
}

//functions aux
function fcatch(err,codigo,message) {
	 
		return res.status(codigo).send({message});
		console.log(err);
	
}



