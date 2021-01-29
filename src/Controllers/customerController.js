'use strict'

const Validator = require('./../validators/fluent-validator');
const customerRepository = require('./../repositories/customerrepository');
const md5 = require('md5');
const emailService = require('./../services/emailService');

//rota/clientes/create
exports.post = async (req,res,next) => {	

	try {

		// isValid(req.body.name,"Nome não é válido");
		// isValid(req.body.email,"Email não é válido");
		// isValid(req.body.password,"password não é válido");

		let data = req.body;
		data.password = md5(global.SALT_KEY + req.body.password);

		var customer = await customerRepository.create(data);
		let email = req.body.email;
		emailService.send(
			email,
			'Teste nodeMailer e Mailtrap',
			global.EMAIL_TMPL.replace('{0}',req.body.name)
			);

		if(customer.length === 0) res.status(400).send({message: 'Cliente não cadastrado', data: e});

		return res.status(201).send({message: 'Criado',customer});


		} catch (e) {
			console.log(e)
			return res.status(400).send({message: 'Não Criado',customer});
			
		}
}




