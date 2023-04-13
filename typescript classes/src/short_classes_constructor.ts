// Class short writed
class Company {
  constructor(
    public name: string,
    public id: number,
    public sector: companySectors
  ) {}
  printInfo() {
    console.log(
      `This is the ${this.name} company, ${
        companySectors[this.sector]
      } area. (Company id: ${this.id})`
    );
  }
}

// Class inheritance
class ITCompany extends Company {
  constructor(name: string, id: number) {
    super(name, id, companySectors.TECH);
  }
}

// Enums
enum companySectors {
  TECH,
  AUTO,
  FOOD_SERVICE,
  HUMAN_RESOURCES,
}

const fiatCompany = new Company('Fiat', 11, companySectors.AUTO);
fiatCompany.printInfo();
const asusCompany = new ITCompany('Asus', 34);
asusCompany.printInfo();
