var DeviceFilter = {
    filter : function (param) {
        if(param.includes("lamp")) {
            return "lamp";
        }
    }
}

module.exports = DeviceFilter;