x = Promise.resolve("The");
x.then(function f1(value){
    console.log("Starting");
    return new Promise(function f2(resolve, reject){
        setTimeout(function exec(){
            value += "re";
            let num = 3;
           
            if(num%2 == 0){
                resolve(value)
            }

            else{
                reject(-1);
            }
        
        
            
           
        }, 1)
    })
   
} )

.then(function f2(value){
    console.log("The returning value is " , value);
    console.log("Ending");
})
.catch(function error(){
    console.log("The value is " , error);
})