// for(let i=50;i>=25;i--){
//     console.log(i);
// }
let n=1;
while(n<=10){
    if(n%3==0){
        console.log(n,"bye");
    }else{
        console.log(n,"hai");
    }
    n++;
}

let str = "GURURAJ";
for(var i =0;i<str.length;i++){
 console.log(str[i]);
}
console.log(str.split('').join(' '));
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a year: ', (year) => {
    year = parseInt(year);
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
    readline.close();
  });
  
