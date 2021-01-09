'use strict'


exports.get = (req,res,next) => {
	res.status(200).send({
		title: "Node Store Api get",
		varsion: "0.0.1"
	});
}
exports.post = (req,res,next) => {		
	res.status(201).send(req.body);
}
exports.put = (req,res,next) => {	 
	const id = req.params.id;
	res.status(200).send({id});
}
exports.delete = (req,res,next) => {	 
	const id = req.params.id;
	res.status(200).send({id});
}
