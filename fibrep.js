function inputfib(n)
{

    if(n == 0)
    {
        console.log(0);
        return;
    }

    if(n>=1)
    {
        console.log(0);
        console.log(1);
    }
    
    let  firstNum = 0;
    let secondNum = 1;

    for(let x = 2; x<=n ; x++)
    {
        let answer = firstNum + secondNum;
        console.log(answer);

        firstNum = secondNum;
        secondNum = answer;
    }
    
    
}

inputfib(5);
inputfib(9);