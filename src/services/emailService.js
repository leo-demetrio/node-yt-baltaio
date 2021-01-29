'use strict'
const config = require('./../config');
const nodemailer = require('nodemailer');

const configMailer = {
	host: 'smtp.mailtrap.io',
	prt: 25,
	auth: {
		user: '3e37164c94546e', 
		pass: 'cc9f5b797994ce'
	}
}
const transporter = nodemailer.createTransport(configMailer);

exports.send = async (to,subject,body) => {


const message = {
		from: "leopoldocd@hotmail.com",
		to: to,
		subject: subject,
		text: body
	}
	transporter.sendMail(message,(error,info) => {
		if(error) {
		console.log(error);
		return	res.status(400).send({error});
	}
		return res.status(200).send({info});
	});
}