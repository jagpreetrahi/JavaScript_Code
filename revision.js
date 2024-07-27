let   obj1 = {x:1};
let obj2 = {y:2};
let obj3 = {z:2};

// Here , if both obj represent the same address from memory then it return true , otherwise it will return false

console.log(obj1 === obj2);
console.log(obj1 === obj1);
console.log(obj3 === obj2);
console.log(obj2 === obj2);
console.log(obj1 === obj3);
console.log(obj3 === obj3);

let x = undefined;


