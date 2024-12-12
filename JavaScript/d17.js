let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); 
console.log("a - b =", a - b); 
console.log("a * b =", a * b); 
console.log("a / b =", a / b); 
console.log("a % b =", a % b); 
console.log("a ** b =", a ** b); 

let c = 5;
console.log("\nAssignment Operators:");
c += 3;  
console.log("c += 3:", c);
c -= 2;  
console.log("c -= 2:", c);
c *= 2;  
console.log("c *= 2:", c);
c /= 2;  
console.log("c /= 2:", c);

console.log("\nComparison Operators:");
console.log("a == b:", a ==b);
console.log("a === b:", a === b); 
console.log("a != b:", a != b);  
console.log("a !== b:", a !== b);
console.log("a > b:", a > b);  
console.log("a >= b:", a >= b); 
console.log("a < b:", a < b);  
console.log("a <= b:", a <= b);

let x = true;
let y = false;
console.log("\nLogical Operators:");
console.log("x && y:", x && y); 
console.log("x || y:", x || y); 
console.log("!x:", !x);         

console.log("\nBitwise Operators:");
console.log("a & b:", a & b);  
console.log("a | b:", a | b);  
console.log("a ^ b:", a ^ b);  
console.log("~a:", ~a);        
console.log("a << b:", a << b);  
console.log("a >> b:", a >> b);  

let age = 20;
console.log("\nTernary Operator:");
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote?", canVote);


console.log("\nType Operators:");
console.log("typeof a:", typeof a); 
console.log("typeof 'hello':", typeof 'hello'); 
console.log("typeof true:", typeof true); 

console.log("\ninstanceof Operators:");
const fruits = ["apples", "bananas", "oranges"];
console.log("Array: " + (fruits instanceof Array));

let str1 = "Hello";
let str2 = "World";
console.log("\nString Operators:");
console.log("str1 + ' ' + str2 =", str1 + " " + str2); 

let d = 10;
console.log("\nUnary Operators:");
console.log("++d:", ++d); 
console.log("--d:", --d); 


