function PromisesCalling()
{
    return new Promise(function fun(resolve, reject){
        console.log("Starting with promise");
        let x = 10;
        if(x%2 == 0)
        {
            console.log("Even");
            resolve(2);
         }   
        else
        {
            console.log("odd");
            reject(3);
        }
        console.log("ending with promises");
    })

}  

PromisesCalling();