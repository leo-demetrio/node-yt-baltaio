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
			 required: true, 
			 trim:true 
			},
			createDate: {
			 type: Date,
			 required: true, 
			 default: Date.now
			},
			number: {
			 type: String,
			 enum: ['created','dome'], 
			 default:true 
			},			
			password: {
			 type: String,
			  required: true,
			   trim:true
			  },
			  items: [{
			  	type: mongoose.Schema.Types.ObjectId,
			  	ref: 'Customer'
			  }]
		}
	
);



module.exports = mongoose.model('Order', OrderSchema);