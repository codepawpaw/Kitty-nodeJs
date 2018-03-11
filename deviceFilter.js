var Devices = require("./devices.js");
var devices = require("./devices.json");

var DeviceFilter = {
    filter : function (param) {
        if(param.includes("lamp")) {
            var result = devices["lamp"];
            var device = Devices.init("lamp", result.pin);
            return device;
        }
    }
}

module.exports = DeviceFilter;