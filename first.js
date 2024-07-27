//  using var variabes
var score = 10;
{
    var score = 90;
    
}

console.log(score);


// using let variable


let age  = 24;
{
    let age = 0;
}

console.log(age+=2);




// using constant variables

const x = 100;
const y = 200;
const z = x + y;
console.log(+z);

let a;
console.log(a);

//  undefined concept

var state = undefined;
//  null
var b = 4;
{
    b = null;
  
}
console.log(b);

// //  creat a object for a complex entity

var user = {
    name: "jaggi",
    company: "goggle",
    salary:"1CR",



 }
// console.log(user);

// special chars::::



var c = "today is very \brainy day";
console.log(c);


let s  = 10;
s  === 11;
console.log(s);

//  equality operator
var t  = 11;
var u = "11";

 console.log(u == t);

 console.log((10/null)/ undefined);

// falsy value in JS
console.log(+0);
console.log(-0);
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);

// bitwise operator depend on bit

console.log(5 & 7);
console.log(5 == 7);


//  type of  any value

console.log(typeof "1");
console.log(typeof 1);
console.log(typeof true);
console.log(typeof null);

//  conditions statements

let w = true;

if(!w)
{
    console.log("not found");
}

else{

    console.log("flash");
}


let isUserPremium = 1;
let isUserVIP = 1;
let isUserAcc  = 0;

if(isUserPremium){
    if(isUserVIP){
      if(isUserAcc)  {
        console.log("enjoy the both content");
        }
        else
        {
            console.log("check the sex video is available: " );

            
        }
        
       
    }
}


else if(isUserVIP)
{
    console.log("bhai thode aur paise dal deta");
}

else{
    console.log("next time aana");
}























