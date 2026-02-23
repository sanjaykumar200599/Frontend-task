// Demonstrate type coercion with at least 5 examples (e.g., '5' + 2, '5' - 2, true + 1, null + 1, undefined + 1). Explain each result in comments

// 1. String + Number
console.log('5' + 2); 
// Output: "52"
// Number 2 is converted to string → "5" + "2" = "52"


// 2. String - Number
console.log('5' - 2);
// Output: 3
// '5' is converted to number 5 → 5 - 2 = 3


// 3. Boolean + Number
console.log(true + 1);
// Output: 2
// 1 + 1 = 2


// 4. null + Number
console.log(null + 1);
// Output: 1
// 0 + 1 = 1


// 5. undefined + Number
console.log(undefined + 1);
// Output: NaN
// NaN + 1 = NaN


console.log('5' == 5);  
// Output: true

console.log('5' === 5); 
// Output: false

