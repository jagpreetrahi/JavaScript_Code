console.log("JavaScript is a sync in nature");
// function setTime1()
// {
//     console.log("loops Starts");
//     // valid code of JS
//     for(let i = 0; i<1000000; i++)
//     {
           
//     }
   
//     console.log("loops ends");

// }

// function setTime2()
// {
//     console.log("compilation start");
//     setTimeout(function exec2(){
//         console.log("loops middle");
//         for(let i = 0; i<10000; i++)
//             {
                
//             }
//     } , 200);
// }

// function setTime4(fn)
// {
//     setTimeout(function exe4(){
//         console.log("callback")
//     }, 500);
//     console.log(fn);
//     fn()
// }

// setTime4(function exec(){
//     console.log("gd bye");
// })


function setTime3()
{
    console.log("Another one");

   const  intervalId =    setInterval(function exec5() {
        console.log("every");
    }, 100);

    setTimeout(function exe(){
        clearInterval(intervalId);
        console.log("stopped");
    } , 300 );

   
   
}



console.log("Hii");
// setTime1();
// setTime2();
setTime3();
console.log("bye");
