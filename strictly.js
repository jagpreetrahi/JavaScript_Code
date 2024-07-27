console.log('abc' === 'bca');
console.log(undefined === null);
console.log(null === NaN);


function ReturnPrint(x ,y)
{
   console.log(x === y);


}

ReturnPrint(3,5);
ReturnPrint(null,5);
ReturnPrint(undefined,5);
ReturnPrint(true,5);
ReturnPrint(false , false);
ReturnPrint(true , false);


console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN));



let obj1 = {x:10};
let obj2 = {x:10};
let obj3 = {y:11};

console.log(obj1 === obj2);
console.log(obj1 === obj3);
console.log(obj1 === obj1);
console.log(obj2 === obj3);
console.log(obj2 == obj3);

console.log(Symbol == Object)
console.log(typeof obj2.toString());

