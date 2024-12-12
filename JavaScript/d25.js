let contact = ["abhi", "Ram", "Sham"];
contact.push("Guru");
contact.push("Akshatha");
contact.push("viraj");

console.log(contact);

const prompt = require("prompt-sync")();
const name = prompt("Enter name to search: ").toLowerCase();;

if (contact.includes(name)) {
    console.log(name + " is present");
} else {
    console.log("Not found");
}
