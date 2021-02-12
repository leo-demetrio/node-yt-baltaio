'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
			
		
			name: {
			 type: String,
			 required: [true, 'O nome é obrigatório'], 
			 trim:true 
			},
			email: {
			 type: String,
			  required: [true, 'O email é obrigatório'],
			  unique: true
			 },
			password: {
			 type: String,
			  required: [true, 'A senha é obrigatória'],
			   trim:true
			  }
		}
	
);



module.exports = mongoose.model('Customer', CustomerSchema);