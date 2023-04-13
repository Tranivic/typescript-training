"use strict";
class Company {
    constructor(name, id, sector) {
        this.name = name;
        this.id = id;
        this.sector = sector;
    }
    printInfo() {
        console.log(`This is the ${this.name} company, ${companySectors[this.sector]} area. (Company id: ${this.id})`);
    }
}
class ITCompany extends Company {
    constructor(name, id) {
        super(name, id, companySectors.TECH);
    }
}
var companySectors;
(function (companySectors) {
    companySectors[companySectors["TECH"] = 0] = "TECH";
    companySectors[companySectors["AUTO"] = 1] = "AUTO";
    companySectors[companySectors["FOOD_SERVICE"] = 2] = "FOOD_SERVICE";
    companySectors[companySectors["HUMAN_RESOURCES"] = 3] = "HUMAN_RESOURCES";
})(companySectors || (companySectors = {}));
const fiatCompany = new Company('Fiat', 11, companySectors.AUTO);
fiatCompany.printInfo();
const asusCompany = new ITCompany('Asus', 34);
asusCompany.printInfo();
