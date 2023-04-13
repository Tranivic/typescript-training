// Enum
enum CompanySectors {
  TECH = 'Technology',
  AUTO = 'Automotive',
  FOOD_SERVICE = 'Food Service',
  HUMAN_RESOURCES = 'Human Resources',
}

// Abstracted class implemented
abstract class Company {
  // Static data
  static fiscalYear = 2023;

  constructor(
    protected name: string,
    protected id: number,
    protected sector: CompanySectors
  ) {}

  public abstract printCompanyDescription(): void;
}

// Class inheritance IT sector
class ITCompany extends Company {
  constructor(name: string, id: number) {
    super(name, id, CompanySectors.TECH);
  }

  public printCompanyDescription(): void {
    console.log(
      `This is the ${this.name} company, ${this.sector} sector. (Company id: ${this.id})`
    );
  }
}

// Class inheritance Food Sector
class FoodCompany extends Company {
  private foodStorage: number = 0;

  constructor(name: string, id: number) {
    super(name, id, CompanySectors.FOOD_SERVICE);
  }

  public printCompanyDescription(): void {
    console.log(
      `This is the ${this.name} company, ${this.sector} sector. (Company id: ${this.id})`
    );
  }

  public get foodQuantity(): number {
    if (this.foodStorage === 0) {
      throw new Error('Food storage is zero (0)');
    }
    return this.foodStorage;
  }

  public set setFoodQuantity(quantity: number) {
    if (quantity > 0 && quantity < 100) {
      this.foodStorage = quantity;
    } else {
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
