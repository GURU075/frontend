let result1 = "5" + 3; // "53" (number 3 is converted to string)
console.log("Add string and number: ", result1);

let result2 = 10 - "3"; // 7 (string "3" is converted to number)
console.log("Subtract string from number: ", result2);

let result3 = (true == 1); // true (true is converted to number 1)
console.log("Boolean == number: ", result3);

let result4 = true + "5"; // "true5" (true is converted to string)
console.log("Add boolean and string: ", result4);

let explicitConversion = Number("123"); // explicitly convert string to number
console.log("Explicit type conversion (string to number): ", explicitConversion);
