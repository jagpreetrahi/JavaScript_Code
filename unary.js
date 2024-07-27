// increament operator ::: postfix operator

let a = 4;
let y  = a++;
console.log(a,y);


//  prefix operator

let b = 5;
let x = ++b;
console.log(b,x);


// unary plus ::: tries to convert the variable into number if  iuit is not already number

let z = "33";
 let v = +z;    // assign is compulsory for unary plus otherwise it will return the previous type
console.log(typeof(v));

//  unary minus

let s = "-11";
let w = -s;
console.log(typeof(w));
console.log(s,w);


let r = undefined;
console.log(typeof(r));


// ternary operator
let n = 19;
let u = ((0)? (10) : (n++));
console.log(u);
console.log(n);