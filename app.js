var express = require('express');
var app = express();
var DeviceAdapter = require('./deviceAdapter.js');

app.get('/', (req, res) => res.send('Home'));

app.get('/on', function(req, res) {
	var result = DeviceAdapter.turnOn(req.query.param);	

	res.send(result);
});

app.get('/off', function(req, res) {
	var result = DeviceAdapter.turnOff(req.query.param);

	res.send(result);
})

app.listen(3000, () => console.log('Home automation is run on port 3000!'));
