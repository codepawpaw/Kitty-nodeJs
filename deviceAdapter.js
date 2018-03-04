var DeviceFilter = require("./deviceFilter.js");
var DeviceInterface = require("./deviceInterface.js");

var DeviceAdapter = {
    turnOn : function (param) {
        var deviceCategory = DeviceFilter.filter(param);
        var result = DeviceInterface.turnOn(deviceCategory);

        return result;
    },
    turnOff : function (param) {
        var deviceCategory = DeviceFilter.filter(param);
        var result = DeviceInterface.turnOff(deviceCategory);

        return result;
    }
}
module.exports = DeviceAdapter;
