let grade = 'B'; 
switch (grade) {
  case 'A':
    console.log("Excellent!");
    break;
  case 'B':
    console.log("Good Job!");
    break;
  case 'C':
    console.log("Fair");
    break;
  case 'D':
    console.log("Needs Improvement");
    break;
  case 'F':
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}
//////////////////////////////

for (let i = 1; i <= 10; i++) {
    if (i > 5) {
      break; 
    }
    console.log(i);
  }
  ///////////////////////////////////

  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      continue; 
    }
    console.log(i); 
  }
  ////////////////////////////////////////
  
  function calculateRectangleArea(width = 1, height = 1) {
    return width * height;
  }
 
  console.log(calculateRectangleArea(5, 10)); 
  console.log(calculateRectangleArea(7));     
  console.log(calculateRectangleArea());      
  // Output: 50
  // Output: 7
   // Output: 1 