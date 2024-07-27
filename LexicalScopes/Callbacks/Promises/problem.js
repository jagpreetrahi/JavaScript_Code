function fetch(url)
{
    return new Promise(function (resolve,reject)
    {
        console.log("Started Download" , url);

        setTimeout(function process(){
            let data = " dummy data";
            console.log("Completed");
            resolve(data);
        } ,7000);


    });
}

console.log("Starting");
let promiseObj = fetch("djhfadhafj");
promiseObj.then(function A(value){
    console.log("Value is " , value);
})

console.log("end");