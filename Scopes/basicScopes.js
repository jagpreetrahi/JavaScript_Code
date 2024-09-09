"use strict";
var student = "Jaggi"; // global -> student -> Jaggi
function details()  // global -> details
{
    
    let marks = 99; // marks -> details -> 90
    console.log(student); // Jaggi
    if(marks%10 == 9){
        console.log("A Grade");
    }
    function activity() // activity -> details
    {
        sports = 'Cricket'; // gives error in case of strict mode.
        let PT_Sir = 'Rajesh'; // activirty scope
        console.log(PT_Sir);
    }
  //  console.log(sports); // it is not defined global 

    activity();
    console.log(sports); // It makes globals after call activity function
    
}

details();