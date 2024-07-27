// i want to implement the ToNumber abstraction operation on subtract operator

// console.log(1-undefined);
// console.log(1-null);
// console.log(1-true);
// console.log(undefined - null);
// console.log(null-false);
// console.log(undefined - true);
// console.log(null-true);

console.log(1-Object);

function Abstract(n)
{
    let x = !n;

    console.log(x);
    


    
}

Abstract(undefined);
Abstract(null);
Abstract(-4);
Abstract(-0);

Abstract("");
Abstract(Symbol);

console.log(1 == false);
console.log(undefined == false);
console.log(undefined == true);
console.log(NaN === NaN);

let obj  = { x: 4 , toString() {return 100;}}

console.log(99 === obj);
console.log(100 === obj);


let obj1 = {
    x : 4 ,  valueOf(){
        return 4;
    }
}
console.log(obj1.valueOf());
console.log(obj1.toString());
