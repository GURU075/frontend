// Global variable
var globalVar = "global";

function testScope() {
  // Function-scoped variable
  var functionVar = "function scoped";

  if (true) {
    // Block-scoped variables
    let blockLet = "block scoped";
    const blockConst = "block scoped";

    console.log(globalVar);   // Accessible
    console.log(functionVar); // Accessible
    console.log(blockLet);    // Accessible
    console.log(blockConst);  // Accessible
  }

  // console.log(blockLet);    // Error: blockLet is not defined
  // console.log(blockConst);  // Error: blockConst is not defined
  console.log(functionVar);   // Accessible
}

testScope();
console.log(globalVar);       // Accessible
// console.log(functionVar);  // Error: functionVar is not defined

// Explanation:
// - `globalVar` is accessible everywhere.
// - `functionVar` is only accessible within `testScope`.
// - `blockLet` and `blockConst` are only accessible within the block where they are defined.
