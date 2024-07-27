// hof is a higher order function which takes another function as a arguments 


function fun(x , fn)
{
    /*
      x is a variable 
      fn is a function
    */
     console.log(x);
     fn(function gun(){
        console.log("another one");
       
     });
     console.log(fn);
    
    
}


fun(10 , function exec(){ // this is a callback
    console.log("This is created like a callbacks");
})


let a = [1,4,5,11,10,2,8,9,6,7];

a.sort(function com(a,b)
{
    return a - b;
})

console.log(a);