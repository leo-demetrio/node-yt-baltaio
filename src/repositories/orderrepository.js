'use strict'
const mongoose = require('mongoose');
const Order = mongoose.model('Order');


module.exports.get =  async () => {

	try {

		return await Order
			.find({}, 'number')
			.populate('customer', 'name')
			.populate('items.product', 'title');	

	} catch (e){
		console.log(e);
	}
}


module.exports.create =  async (body) => {

	try {

		const order = await new Order(body);
		return order.save();

		//return order.save();
	

	} catch (e){
		console.log(e);
	}
}