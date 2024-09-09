console.log(undefined == false);
console.log(undefined == null);
let obj = {
    toString(){
        return "Jagpreet Singh";
    }
}
console.log(obj == true)

console.log(NaN === NaN);
console.log('Nan' == NaN);

console.log(null == undefined);
console.log(null == obj);

let obj1 = {x:10 ,  toString() {return '0'}};
let obj2 = {x:10};
let obj3 = {x:10};

console.log(obj1 === obj2);
console.log(obj2 === obj3);
console.log(obj1 === obj1);

let x = true;

console.log((!x) == obj1)

console.log(Symbol == obj);

let y = undefined;
console.log(" " == y);


// Coercoin Case
console.log({} + {});
console.log("" + {});
console.log("" + [1]);
console.log("" + 0);
console.log("" + (-0));
console.log([0] + (-0));
console.log([] + (-0));
console.log([] + "");