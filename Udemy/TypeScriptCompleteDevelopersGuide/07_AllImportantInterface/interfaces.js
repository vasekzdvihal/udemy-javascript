var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name, ", Year: ").concat(this.year, ", Broken: ").concat(this.broken);
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
