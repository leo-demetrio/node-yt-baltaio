'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
			
		
			name: {
			 type: String,
			 required: true, 
			 trim:true 
			},
			email: {
			 type: String,
			  required: true,
			  unique: true
			 },
			password: {
			 type: String,
			  required: true,
			   trim:true
			  }
		}
	
);



module.exports = mongoose.model('Customer', CustomerSchema);