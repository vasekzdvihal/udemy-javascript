var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('chugga chugga');
    };
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
