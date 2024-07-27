function Do()
{
    let k = 2;
    if(k%2 == 0)
    {
        let i = 1;
    }
    function inner()
    {
        
        i = k + 1;
        console.log(i);
    }

    return inner;
}



let res = Do();
console.log("first time" , res());

