'use strict'
const Validator = require('./../validators/fluent-validator');
const orderRepository = require('./../repositories/orderrepository');
const guid = require('guid');


exports.get = async (req,res, next) => {

	try{
	
	var order = await  orderRepository.get();

	if(order.length === 0) res.status(400).send({message: 'Nenhum pedido cadastrado'});

	return res.status(201).send({message: 'Criado',order});

	} catch (e) {
		console.log(e);
		console.log(order);
		return res.status(400).send({message: 'Erro order',order});

	}

}

exports.post = async (req,res,next) => {	

	try {

		var order = await orderRepository.create({
			customer: req.body.customer,
			number: guid.raw().substring(0,6),
			items: req.body.items
		});

		if(order.length === 0) res.status(400).send({message: 'Pedido não cadastrado', data: e});

		return res.status(201).send({message: 'Pedido criado',order
});


		} catch (e) {
			return res.status(400).send({message: 'Pedido Não Criado',order
});
			console.log(e)
		}


}