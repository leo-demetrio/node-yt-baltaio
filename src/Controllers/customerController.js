'use strict'

const Validator = require('./../validators/fluent-validator');
const customerRepository = require('./../repositories/customerrepository');

exports.post = async (req,res,next) => {	

	try {

		// isValid(req.body.name,"Nome não é válido");
		// isValid(req.body.email,"Email não é válido");
		// isValid(req.body.password,"password não é válido");

		var customer = await customerRepository.create(req.body);	
		if(customer.length === 0) res.status(400).send({message: 'Cliente não cadastrado', data: e});

		return res.status(201).send({message: 'Criado',customer});


		} catch (e) {
			return res.status(400).send({message: 'Não Criado',customer});
			console.log(e)
		}
}


