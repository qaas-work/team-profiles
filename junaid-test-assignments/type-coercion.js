// Example of Type Coercion

let myNumber = 10;
let myString = "10";
let anotherString = "Hello";
let myBoolean = true;

console.log("--- Loose Equality (==) ---");

// Example 1: Number and String
// JavaScript tries to convert the string "10" to the number 10.
// So, 10 == 10 (true)
console.log(`myNumber == myString (10 == "10"): ${myNumber == myString}`); // Output: true

// Example 2: Number and Boolean
// JavaScript tries to convert 'true' to the number 1.
// So, 10 == 1 (false)
console.log(`myNumber == myBoolean (10 == true): ${myNumber == myBoolean}`); // Output: false

// Example 3: String and Boolean
// JavaScript tries to convert "10" to a number (10) and true to a number (1).
// So, 10 == 1 (false)
console.log(`myString == myBoolean ("10" == true): ${myString == myBoolean}`); // Output: false

// Example 4: Comparing an empty string to 0
// JavaScript converts "" to 0.
// So, 0 == 0 (true)
console.log(`"" == 0: ${"" == 0}`); // Output: true

// Example 5: Comparing null and undefined
// These are special cases where loose equality considers them equal.
console.log(`null == undefined: ${null == undefined}`); // Output: true

console.log("\n--- Strict Equality (===) ---");

// Example 6: Number and String
// JavaScript does NOT perform type coercion. It checks both value AND type.
// Number 10 is not strictly equal to String "10".
console.log(`myNumber === myString (10 === "10"): ${myNumber === myString}`); // Output: false

// Example 7: Number and Boolean
// Number 10 is not strictly equal to Boolean true.
console.log(`myNumber === myBoolean (10 === true): ${myNumber === myBoolean}`); // Output: false
