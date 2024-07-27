//  IIFE => Immediately Invoked Function Expression

// What is function expression
// => starting with some valid part instead of fuinction  keyword

(function x(){
    console.log('Hii World');
})();  // here we call the function immediately after define that is IIFE

(function x(y){
    console.log('Hii' , y);
})('jaggi') // => here we calll the function by psssing the some values


let a = function x(){
    console.log('Failure is a part of Success');
} 

