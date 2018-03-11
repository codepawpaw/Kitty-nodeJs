var DeviceFilter = require("./deviceFilter.js");
var DeviceInterface = require("./deviceInterface.js");

var DeviceAdapter = {
    turnOn : function (param) {
        var device = DeviceFilter.filter(param);
        var result = DeviceInterface.turnOn(device);

        return result;
    },
    turnOff : function (param) {
        var device = DeviceFilter.filter(param);
        var result = DeviceInterface.turnOff(device);

        return result;
    }
}
module.exports = DeviceAdapter;
