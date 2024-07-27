console.log("Start of the file ");

setTimeout(function timer1(){
    console.log("Timer 1 is done ");
} , 0);

for(let i = 0; i < 1000000; i++)
{
        // body
}

let x = Promise.resolve("Jagpreet Promise");
x.then(function process(value){
    console.log("Whose Promise " , value);
})

setTimeout(function timer2()
{
    console.log("timer 2 is done ");

} , 0);

console.log("End of the file ");
