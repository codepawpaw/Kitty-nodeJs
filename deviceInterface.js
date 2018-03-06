var pythonShell = require('python-shell');
var options = {
    // scriptPath: '/home/pi/Workspace/LampSwitch/'
    scriptPath: '../python/'
}

var DeviceInterface = {
    turnOn : function (param) {
        pythonShell.run(param + '_on.py', options, function(err, results){
            return "ok";
        });
    },

    turnOff : function (param) {
        pythonShell.run(param + '_off.py', options, function(err, results){
            return "ok";
        });
    }
};

module.exports = DeviceInterface;