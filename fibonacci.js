// Create a function for fibonacci series
function printFibonacci(n)
{
    // Check the condition with 0 because sometimes user want to print zeroth number fib series

    if(n == 0)
    {
        console.log(0);
        return;
    
    }

    // Check the condition with greater than equal to 1 for print the first  number fib series.
    if(n >= 1)
    {
        console.log(0);
        console.log(1);
        
    }

    //  Initialize the (n-2) and (n-1) term with 0 and 1 for create the n th term .
     
    let last = 0;
    let current = 1;
    
    //  Iterete the loop for upcoming number start with 2 and goes up to n ..

    for(let i = 2; i<=n; i++)
    {
        // Initialize the variable answer to store the sum of last and current number..
        let answer = last + current;
        // print the answer
        console.log(answer);
        //  Change the track for pointing the last and current number of n th number
        last = current;
        current = answer;


    }
}

// call the number with argument
printFibonacci(5);