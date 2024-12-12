//3
// let text = "Today is 2024-11-26 and tomorrow is 2024-11-27. 2025-23 2025-12-29";
// let result = /\b\d{4}-\d{2}-\d{2}\b/g.exec(text);
// console.log(result); 

//4
// let text = "https://www.excelr.com/";
// let result = /^(https?:\/\/)([\da-z.-]+)\.([a-z\.]{2,6})\.([/\w .-]*)*\/?/.test(text);
// console.log(result); 

//5
// let text = "+91 9637439055 9876543210 A@93242424 anfapief janei242";
// let result = text.match(/\b(?:\+91)?[7-9]\d{9}\b/g);
// console.log(result);

//6
// let text ="Gururaj Guru Raj Yadav javaScript";
// let result = text.matchAll(/\b\w{6,}\b/g);
// for (const match of result) {
//     console.log(match[0]);
//   }

//7
// const prompt = require("prompt-sync")()
// const text = prompt("enter the text");
// const word = prompt("enter the word");

// const result = text.search(new RegExp(`^${word}\\s`)) === 0;

// if (result) {
//     console.log(`The text starts with "${word}".`);
//   } else {
//     console.log(`The text does not start with "${word}".`);
//   }

let text = "My name is Gururaj Yadav !!";
let result = text.split(/[ ,!]/);
result = result.filter(word=> word !=='');
console.log(result);


