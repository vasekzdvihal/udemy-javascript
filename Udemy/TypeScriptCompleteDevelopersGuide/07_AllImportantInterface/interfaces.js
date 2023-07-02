var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
};
var printVehicle = function (vehicle) {
    console.log("Name: ".concat(vehicle.name));
    console.log("Year: ".concat(vehicle.year));
    console.log("Broken: ".concat(vehicle.broken));
};
printVehicle(oldCivic);
