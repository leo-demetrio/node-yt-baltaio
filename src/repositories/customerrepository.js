'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
//const Product = require('./../models/productsModel');



// module.exports.get =  () => {

// 	try {

// 		return Product.find({},'title price slug');
	

// 	} catch (e){
// 		console.log(e);
// 	}
// }

module.exports.create =  async (body) => {

	try {

		const customer = await new Customer(body);

		return customer.save();
	

	} catch (e){
		console.log(e);
	}
}
