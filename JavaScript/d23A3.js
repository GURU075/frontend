const myObject = {
    name: "John",
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
  
      // Nested function
      function innerFunction() {
        console.log(this); // `this` refers to the global object or `undefined` in strict mode
      }
  
      innerFunction();
  
      // Solution using arrow function
      const arrowFunction = () => {
        console.log(this); // `this` refers to `myObject` because arrow functions do not have their own `this`
      };
  
      arrowFunction();
    }
  };
  
  myObject.greet();