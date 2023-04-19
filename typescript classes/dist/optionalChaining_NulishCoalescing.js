"use strict";
var _a;
// Optional Chaining & Nulish Coalescing
const fetchedTestObject = {
    name: 'Test',
    id: 1,
    childObject: { count: 1 },
};
console.log((_a = fetchedTestObject === null || fetchedTestObject === void 0 ? void 0 : fetchedTestObject.childObject) === null || _a === void 0 ? void 0 : _a.count);
const testString = 'testing';
const returnedValue = testString !== null && testString !== void 0 ? testString : 'Default';
console.log(returnedValue);
