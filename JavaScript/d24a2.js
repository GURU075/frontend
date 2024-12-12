// Constructor function for a Book object
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    // Method to display the details of the book
    this.displayDetails = function() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    };
  }
  
  // Example usage
  let myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  myBook.displayDetails();

  //////////////
  // Create an array and add elements using push and unshift
let fruits = [];
fruits.push("Apple"); // Add element at the end
fruits.push("Banana");
fruits.unshift("Mango"); // Add element at the beginning
fruits.unshift("Orange");

console.log("Array after adding elements:", fruits);

// Remove elements using pop and shift
fruits.pop(); // Remove element from the end
fruits.shift(); // Remove element from the beginning

console.log("Array after removing elements:", fruits);
/////////////////
// Create a multi-dimensional array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Access each element using nested loops
  console.log("Elements of the matrix:");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  