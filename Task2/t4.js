//Use spread operator to merge arrays and objects. Create a shallow copy and explain shallow vs deep copy

//arrays
const arr1 =[1,2];
const arr2 =[3,4];
const mergedArray =[...arr1, ...arr2];
console.log(mergedArray);

//objects
const obj1 = { name:"John" };
const obj2 = { age:21 };
const mergedObject = {...obj1, ...obj2 };
console.log(mergedObject);

//shallow copy
const original = { name:"Aryan", address:{ city: "Chennai" }};
const shallowcopy = {...original};

shallowcopy.name = "Virat";
shallowcopy.address.city = "Bangalore";

console.log("Original: ",original);
console.log("shallow Copy: ",shallowcopy);

const deepCopy = structuredClone(original);
console.log(deepCopy);




