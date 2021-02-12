'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
			
			customer: {
			 type: mongoose.Schema.Types.Object,
			  ref: 'Customer',
			 },		
			number: {
			 type: String,
			 required: [true, 'O número é obrigatório'], 
			},
			createDate: {
			 type: Date,
			 required: [true, 'A data é obrigatória'], 
			 default: Date.now
			},
			status: {
			 type: String,
			 required: [true, 'O status é obrigatório'],
			 enum: ['created','done'], 
			 default: 'created'
			},			
			 items: [{

			  	quantity: {
				 type: Number,
				 required: true, 
				 default: 1 
				},
				price: {
				 type: Number,
				 required: [true, 'O preço é obrigatório'], 
				},
				product: {
				 type: mongoose.Schema.Types.Object,
				  ref: 'Product',
				 }

			 }]
		}
	
);



module.exports = mongoose.model('Order', OrderSchema);