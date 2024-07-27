
// console.log(1 - "0xa");

let obj = {
    toString()
    {
        // by default gives [object Object]  --- to string
        // by default gives same object
        return 10;
    },

    valueOf()
    {
        return  32;  
    }
    
};
console.log( typeof obj.toString());
console.log(  obj.valueOf());

console.log(1-null);
console.log(1-NaN);
console.log(obj-Object);

let obj1 = {
    valueOf()
    {
        return 65;
    }
}
console.log("100"-obj1);

let obj2 = {x:2, toString() {return "2"}};
console.log(100-obj2);
console.log("100"-"32");


