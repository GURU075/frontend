// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('Enter a year: ', (year) => {
//     year = parseInt(year);
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       console.log(`${year} is a leap year.`);
//     } else {
//       console.log(`${year} is not a leap year.`);
//     }
//     readline.close();
//   });


number = 50;
if (number >= 1 && number < 50) {
    console.log(number,`is in the range of 1 to 49.`);
} else if (number >= 50 && number <= 100) {
    console.log(number,` is in the range of 50 to 100.`);
} else {
    console.log(number,` is out of the range.`);
}
// let age =parseInt(prompt("enter age"));
age = 22;
const category = age < 13 ? 'Child' :
                age < 20 ? 'Teenager' :
        age < 60 ? 'Adult' : 'Senior';
console.log(`You are :`,category);