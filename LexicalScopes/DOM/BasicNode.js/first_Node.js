const x = setTimeout(function exec(){
    console.log("hello");


} , 1000);

console.log(x);
clearTimeout(x);