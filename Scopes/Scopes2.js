"use strict";
function Student_Details() // globals
{
    console.log(student);
    var student = 'Jaggi'; // student -> Student_Details
    
    let marks = 200; // student -> Student_Details
    console.log(marks);
    if(marks%2 == 0)
    {
        console.log('Good marks')
    }else{
        console.log('Avg marks');
    }

   if(marks = 200)
    {
        var x = 12;
        console.log(x);
    }
    console.log(x);
     

}
Student_Details();

function calculation(a  , b )
{
    "use strict";
    return a + b;
}

let result = calculation(2 ,4);
console.log(result);

var z ;
delete globalThis.z;

const obj = {x: 3 , x: 4 , x:5};
console.log(obj.x);
console.log(obj.x);