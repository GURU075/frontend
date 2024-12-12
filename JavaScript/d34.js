// class Animal{
   
//      eat(){
//          console.log("Animal eats");
//     }
//     sleep(){
//         console.log("animal sleeps");
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("dog barks");
//     }
// }

// let dog = new Dog();
// dog.eat();
// dog.sleep();
// dog.bark();

class Calculator {
    constructor(array, number) {
        this.num1 = number;
        this.array = array;
    }

    
}
Calculator.prototype.multiplyBy = function() {
    for (let i = 0; i < this.array.length; i++) {
        this.array[i] = this.array[i] * this.num1;
    }
    console.log(this.array);
}

let calc = new Calculator([1, 2, 3, 4, 5], 2);
calc.multiplyBy();