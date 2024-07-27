


function creatPromise()
{
    return new Promise(function exec(resolve, reject){
        console.log("Inside the Promise");
        let x = 4;
        if(x %2 == 0)
        {
           resolve("done");
        }

        else{
            reject();
        }



    })
}

setTimeout(function exec(){
    console.log("Tinmer is here ");
}, 0);

const p = creatPromise();
console.log("Implement the functionality ");
console.log("The current state 0f promise is " , p);

p.then( function fulfillmentHandler(value) {
    console.log("fulfillment value is " , value);
},
 function rejectionhandler() {
    console.log("we have rejection " , value);
});

console.log("starting");

for(let i = 0; i<10000000; i++){}

console.log("ending...");

