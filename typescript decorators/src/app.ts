// Define a function that injects an HTML template into the DOM
function injectTemplateIntoDom(htmlTemplate: string, targetElId: string) {
  return (_: Function) => {
    const targetEl = document.getElementById(targetElId)!;
    if (targetEl) {
      targetEl.innerHTML = htmlTemplate;
    }
  };
}

// Use a decorator to inject an HTML template into the DOM when the PersonComponent class is instantiated
@injectTemplateIntoDom('Hello World', 'title')
class PersonComponent {
  firstName = 'Max';

  constructor() {
    console.log('Creating person object!');
  }
}

// Create a new instance of the PersonComponent class
const newPersonComponent = new PersonComponent();

// Log the new instance of the PersonComponent class
console.log(newPersonComponent);

// Define a decorator function that logs information about a class property
// Class Decorator
function Log(target: any, propertyName: any) {
  console.log(target);
  console.log(propertyName);
}

// Acessor Decorator
function Log2(target: any, propertyName: any, descriptor: PropertyDescriptor) {
  console.log('target');
  console.log(target);
  console.log('propertyName');
  console.log(propertyName);
  console.log('descriptor');
  console.log(descriptor);
}

// Methods Decorator
function Log3(target: any, propertyName: any, descriptor: PropertyDescriptor) {
  const decoratorObject: [
    typeof target,
    typeof propertyName,
    typeof descriptor
  ] = [target, propertyName, descriptor];
  console.log(decoratorObject);
}

// Parameters Decorator
function Log4(target: any, name: any, position: number) {
  const decoratorObject: [typeof target, typeof name, typeof position] = [
    target,
    name,
    position,
  ];
  console.warn('Parameter Decorator')
  console.log(decoratorObject);
}

// Define a Product class with a protected title property and a private _price property
class Product {
  @Log
  protected title: string;
  private _price: number | null = null;

  constructor(public n: string) {
    this.title = n;
  }
  @Log3
  getPriceText() {
    if (this._price === null) {
      return 'Price has not been set';
    }
    return `The product ${this.title} costs ${this._price} ${
      this._price > 1 ? 'dollars' : 'dollar'
    }`;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Price is not valid');
    }
  }

  getPriceWithTax(@Log4 taxValue: number): number | string {
    if (taxValue > 0 && this._price !== null) {
      return this._price * taxValue;
    }
    throw new Error('Something went wrong in calculate the tax');
  }
}

// Create a new instance of the Product class
const product = new Product('Pen');

// Set the price of the product to 1
product.price = 13;
const priceWithTax = product.getPriceWithTax(2);
console.log('This is the price with tax: ' + priceWithTax);
