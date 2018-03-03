var express = require('express');
var pythonShell = require('python-shell');
var app = express();
var gpio = require('rpi-gpio');
var options = {
	scriptPath: '/home/pi/Workspace/LampSwitch/'
}


app.get('/', (req, res) => res.send('Home'));

app.get('/lampOn', function(req, res) {
	pythonShell.run('on.py', options, function(err, results){

	});
});

app.get('/lampOff', function(req, res) {
	pythonShell.run('off.py', options, function(err, results){

	});
});

//gpio.setup(2, gpio.DIR_OUT, write);

function write() {
	gpio.write(2, true, function(err) {
		console.log("error :" + err);
		console.log('Written to pin');
	});
}

app.listen(3000, () => console.log('Home automation is run on port 3000!'));
