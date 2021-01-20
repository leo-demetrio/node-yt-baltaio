'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
//const Product = require('./../models/productsModel');



module.exports.get =  () => {

	try {

		return Product.find({},'title price slug');
	

	} catch (e){
		console.log(e);
	}
}
module.exports.getBySlug =  (slug) => {

	try {

		return Product.findOne({slug}, 'title price slug');
	

	} catch (e){
		console.log(e);
	}
}
module.exports.getById =  (id) => {

	try {

		return Product.findById({ _id: id }, 'title price slug');
	

	} catch (e){
		console.log(e);
	}
}
module.exports.getByTag =  (tags) => {

	try {

		return Product.find({ tags }, 'title price slug');
	

	} catch (e){
		console.log(e);
	}
}

module.exports.create =  async (body) => {

	try {

		const product = await new Product(body);

		return product.save();
	

	} catch (e){
		console.log(e);
	}
}
module.exports.update =  async (id,body) => {

	try {

		const product = await Product.findByIdAndUpdate(id,body, {new: true});

		return product.save();
	

	} catch (e){
		console.log(e);
	}
}
module.exports.delete =  async (id) => {

	try {

			
		return await Product.findOneAndRemove(id);		
	

	} catch (e){
		console.log(e);
	}
}