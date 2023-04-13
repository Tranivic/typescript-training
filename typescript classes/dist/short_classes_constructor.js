"use strict";
// Enum
var CompanySectors;
(function (CompanySectors) {
    CompanySectors["TECH"] = "Technology";
    CompanySectors["AUTO"] = "Automotive";
    CompanySectors["FOOD_SERVICE"] = "Food Service";
    CompanySectors["HUMAN_RESOURCES"] = "Human Resources";
})(CompanySectors || (CompanySectors = {}));
// Abstracted class implemented
class Company {
    constructor(name, id, sector) {
        this.name = name;
        this.id = id;
        this.sector = sector;
    }
}
// Static data
Company.fiscalYear = 2023;
// Class inheritance IT sector
class ITCompany extends Company {
    constructor(name, id) {
        super(name, id, CompanySectors.TECH);
    }
    printCompanyDescription() {
        console.log(`This is the ${this.name} company, ${this.sector} sector. (Company id: ${this.id})`);
    }
}
// Class inheritance Food Sector
class FoodCompany extends Company {
    constructor(name, id) {
        super(name, id, CompanySectors.FOOD_SERVICE);
        this.foodStorage = 0;
    }
    printCompanyDescription() {
        console.log(`This is the ${this.name} company, ${this.sector} sector. (Company id: ${this.id})`);
    }
    get foodQuantity() {
        if (this.foodStorage === 0) {
            throw new Error('Food storage is zero (0)');
        }
        return this.foodStorage;
    }
    set setFoodQuantity(quantity) {
        if (quantity > 0 && quantity < 100) {
            this.foodStorage = quantity;
        }
        else {
            this.foodStorage = 0;
            throw new Error('Food quantity can not be more than 100');
        }
    }
}
// Instances
const asusCompany = new ITCompany('Asus', 34);
const lactaCompany = new FoodCompany('Lacta', 12);
// Usage of Set & Getters
lactaCompany.setFoodQuantity = 10;
console.log(lactaCompany.foodQuantity);
// Usage of printCompanyDescription method
lactaCompany.printCompanyDescription();
