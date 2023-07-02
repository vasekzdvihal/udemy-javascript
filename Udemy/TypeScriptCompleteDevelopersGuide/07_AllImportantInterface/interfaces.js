var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name, ", Year: ").concat(this.year, ", Broken: ").concat(this.broken);
    }
};
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My ".concat(this.color, " drink has ").concat(this.sugar, " grams of sugar and is ").concat(this.carbonated ? '' : 'not ', "carbonated");
    }
};
var printSummary = function (item) {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
