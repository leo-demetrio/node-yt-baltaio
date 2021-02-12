'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');




module.exports.get =  () => {

	try {

		return Customer.find({});
	

	} catch (e){
		console.log(e);
	}
}

module.exports.create =  async (body) => {

	try {

		const customer = await new Customer(body);

		return customer.save();
	

	} catch (e){
		console.log(e);
	}
}
