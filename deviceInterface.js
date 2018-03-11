var pythonShell = require('python-shell');
var options = {
    // scriptPath: '/home/pi/Workspace/LampSwitch/'
    scriptPath: './python/'
}
var GPIO = require("pi-gpio");

var DeviceInterface = {
    turnOn : function (param) {
        GPIO.open(param.pin, "output", function(err) {		// Open pin 16 for output
            GPIO.write(param.pin, 1, function() {			// Set pin 16 high (1)
                GPIO.close(16);						// Close pin 16
            });
        });
        // pythonShell.run(param + '_on.py', options, function(err, results){
        //     return "ok";
        // });
    },

    turnOff : function (param) {
        pythonShell.run(param + '_off.py', options, function(err, results){
            return "ok";
        });
    }
};

module.exports = DeviceInterface;