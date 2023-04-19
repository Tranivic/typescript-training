// Optional Chaining & Nulish Coalescing
const fetchedTestObject = {
  name: 'Test',
  id: 1,
  childObject: { count: 1 },
};
console.log(fetchedTestObject?.childObject?.count);

const testString = 'testing';
const returnedValue = testString ?? 'Default';
console.log(returnedValue);
