const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
var path = require('path');
const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test'){
	mongoose.connect('mongodb://darshitsoni:darshitsoni@ds111895.mlab.com:11895/crudapp');
};

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

routes(app);

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});


module.exports = app;

app.listen(process.env.PORT || 3050, () => {
	console.log('Running on port 3050');
});