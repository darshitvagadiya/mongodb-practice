const Driver = require('../models/driver');
const mongoose = require('mongoose');
module.exports = {
	greeting(req, res){
		res.send({ hi: 'there' });
	},

	index(req, res, next) {
	    const {lng, lat} = req.query;
	 
	    Driver.find({ })
	        .then(drivers => res.send(drivers))
	        .catch(next);
	},

	show(req, res, next){
		const id = req.params.id;
		Driver.findOne({ _id: id }, function(err, driver){
			if(err){
				res.send(err);
			}else{
				res.json(driver);
			}
		})
	},

	create(req, res, next){
		const driverProps = req.body;
		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(next);
	},

	edit(req, res, next){
		const driverId = req.params.id;
		const driverProps = req.body;

		Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
			.then(() => Driver.findById({ _id: driverId }))
			.then(driver => res.send(driver))
			.catch(next);
	},

	delete(req, res, next){
		const driverId = req.params.id;

		Driver.findByIdAndRemove({ _id: driverId })
			.then(driver => res.send(driver))
			.catch(next);
	}
};