
console.log("Welcome to the To Do List");
const readline  = require('readline');

const rl = createInterface({
    input : process.stdin,
    output: process.stdout
})

console.log("Please enter something:");

rl.question('', (userInput) => {
    console.log("User input:", userInput);
    rl.close();
});


