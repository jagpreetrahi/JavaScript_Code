function fun(fn)
{
    console.log('welcome');
    fn();// call tyhe fn() which have scpoe inside the fun function
}



fun(function asking(){ // we pass the function for fn
    console.log('here');
    console.trace(); // here tace is used to trace the call stack of function 
})


// use case of iife

function f1()
{
    return 1;
}

function f2()
{
    return 2;
}

var i = 10;
var res = (function evaluate(i){
    if(i%2 == 0) return f1();
    else return f2();
})(i); // iife to see the output

console.log(res);


function x()
{
    console.log('hello');
}

(function x(y){
    console.log('world' , y)
})('jassi');

x();