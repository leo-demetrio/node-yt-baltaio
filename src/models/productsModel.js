'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
			
		
			title: {
			 type: String,
			 required: true, 
			 trim:true 
			},
			slug: {
			 type: String,
			  required: [true, 'O slug é obrigatório'],
			  trim:true,
			   index: true, 
			   unique: true
			 },
			description: {
			 type: String,
			  required: [true, 'A  descrição é obrigatória'],
			   trim:true
			  },
			price: {
			 type: Number,
			 required: [true, 'O preço é obrigatório']
			 },
			active: {
			 type: Boolean,
			  default: true
			  },
			tags: [
			{ 
				type: String
			}
			],

		}
	
);



module.exports = mongoose.model('Product', ProductSchema);