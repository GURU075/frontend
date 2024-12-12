const prompt = require("prompt-sync")()
const day = parseInt(prompt("enter day"));
console.log(day);
var date = new Date();
switch(day){
    case 1:
        console.log("monday"+date);
        break;
    case 2:
        console.log("tue"+date);
        break;
    case 3:
        console.log("wed"+date);
        break;
    case 4:
        console.log("thur"+date);
        break;
    case 5:
        console.log("friday"+date);
        break;
    case 6:
        console.log("sat"+date);
        break;
    case 7:
        console.log("sun"+date);
        break;
    default:
        console.log("invalid input");
}