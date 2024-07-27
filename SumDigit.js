function digit(x)
{
    let sum = 0;
    while(x>0){
        let lastDigit = x%10;
        sum += lastDigit;
        x =  Math.floor(x/10);
    }
    return sum;
 
}

let print = digit(123456);
console.log(print);