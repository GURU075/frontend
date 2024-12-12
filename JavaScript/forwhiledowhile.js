

while (true) {
    const prompt = require("prompt-sync")()
    const number = parseInt(prompt("enter number"));
    if (number % 4 === 0 && number % 8 === 0) {
      console.log('The number is divisible by both 4 and 8.');
      break; 
    } else {
      console.log('The number is not divisible by both 4 and 8. Try again!!');
      
    }
  }