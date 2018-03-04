var express = require('express');
var app = express();
//var gpio = require('rpi-gpio');
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

//gpio.setup(2, gpio.DIR_OUT, write);

// function write() {
// 	gpio.write(2, true, function(err) {
// 		console.log("error :" + err);
// 		console.log('Written to pin');
// 	});
// }

app.listen(3000, () => console.log('Home automation is run on port 3000!'));
