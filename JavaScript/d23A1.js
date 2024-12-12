for (var i = 0; i < 2; i++) {
    let letVariable = "Block scoped";
    const constVariable = "Also block scoped";
    var varVariable = "Function scoped";
  
    // Inside the loop block
    console.log(letVariable);  // Output: "Block scoped"
    console.log(constVariable); // Output: "block scoped"
    console.log(varVariable);   // Output: "Function scoped"
  }
  

  // Outside the loop block
   console.log(letVariable);  // Error: letVariable is not defined
   console.log(constVariable); // Error: constVariable is not defined
  console.log(varVariable);     // Output: "Function scoped"
  // Explanation:
// - `var` variables are function-scoped, so `varVariable` is accessible outside the loop.
// - `let` and `const` are block-scoped, so they are not accessible outside the loop.