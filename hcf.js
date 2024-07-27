// function gcd(a,b)
// {
//     let answer = 1;
//     for(let i = 2; i<= Math.min(a,b); i++)
//    {
//         if(a%i == 0 && b%i == 0)
//        {
//            answer = i;
//         }

    
//     }
//     return answer;




// }


// let print = gcd(7,11);
// console.log(print);

function gcd(a,b)
{
    while(b !== 0){
        let temp = b;
        let r = a%b;
        b = r;
        a = temp;
    }
    return a;
    
   

}


 let result = gcd(28,24);
 console.log(result);