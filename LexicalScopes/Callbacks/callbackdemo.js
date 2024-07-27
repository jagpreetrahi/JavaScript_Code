function fun(fn, x){

    // for(let i = 0; i < x; i++)
    // {
    //     console.log(x);
    // }

    fn(x*x);
    fn(x*x);
}

fun(function exec(num){  // due to callbacks , passing the control of how the exec should be called to hof 
    // or how we can handled the callbacks inside the higher order function
    console.log("The num is " , num);
} , 9)



