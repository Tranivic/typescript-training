const names: string | number[] = [];
const myPromise: Promise<string> = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve('Time over!');
  }, 1000);
});

myPromise.then((data) => {
  // Its possible to use the split method because i've setted the Generic Promisse to string
  data.split(' ');
});

// Generic Function
function merge<T, U>(obj1: T, obj2: U) {
  return Object.assign({}, obj1, obj2);
}
const mergedObj = merge({ oi: 'test' }, { tchau: 'test' });
console.log(mergedObj.oi);
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
): string {
  const returnStr = 'Value: ' + obj[key];
  return returnStr;
}
console.log(extractAndConvert({ name: 'Victor' }, 'name'));

// Generic Classes
class DataStorge<T extends number | string> {
  constructor(public data: T[]) {}

  addItem(newItem: T) {
    this.data.push(newItem);
  }

  removeItem(newItem: T) {
    if ((this.data.indexOf(newItem), 1)) {
      this.data.splice(this.data.indexOf(newItem), 1);
    }
    return;
  }

  getItems() {
    console.log(this.data);
  }
}

const stringStorage = new DataStorge<string>([]);
stringStorage.addItem('Pedro');
stringStorage.addItem('Maria');
stringStorage.addItem('Felipe');
stringStorage.removeItem('Pedro');
stringStorage.getItems();
