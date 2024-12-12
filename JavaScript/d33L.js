// class Calculator {
//     constructor(shape) {
//       this.shape = shape;
//     }
  
//     Calculator(){
//         console.log("heyyyyyyyyyyy");
//     }
//     calculateArea() {
//       switch (this.shape) {
//         case 'triangle':
//           const base = parseFloat(prompt('Enter base:'));
//           const height = parseFloat(prompt('Enter height:'));
//           return 0.5 * base * height;
//         case 'rectangle':
//           const length = parseFloat(prompt('Enter length:'));
//           const width = parseFloat(prompt('Enter width:'));
//           return length * width;
//         case 'square':
//           const side = parseFloat(prompt('Enter side:'));
//           return side * side;
//         default:
//           return 'Invalid shape';
//       }
//     }
//   }
//   const prompt = require("prompt-sync")()
//   const shape = prompt('Enter shape (triangle, rectangle, square):');
//   const calculator = new Calculator(shape);
//   const area = calculator.calculateArea();
//   calculator.Calculator();
//   console.log(`Area: ${area}`);

class Animal{
    constructor(name) {
        this.name=name;
    }
    parent(){
        console.log("this is parent animal");
    }
}
class tiger extends Animal{
    constructor(name){
        super(name);
        this.name=name;
    }
    show(){
        console.log(this.parent+" "+this.tiger);
    }

}
let a = new tiger("tiger");
let b = new Animal("Animal");
console.log(a);
console.log(b);

class Employee {
    constructor(name, age, salary) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
  
    getDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
  }
  
  class Company {
    constructor(name, employees = []) {
      this.name = name;
      this.employees = employees;
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    displayEmployees() {
      console.log(`Employees of ${this.name}:`);
      this.employees.forEach(employee => employee.getDetails());
    }
  }
  
  const employee1 = new Employee('ram', 25, 50000);
  const employee2 = new Employee('Bob', 30, 60000);
  
  const company = new Company('TExcelr');
  company.addEmployee(employee1);
  company.addEmployee(employee2);
  
  company.displayEmployees();