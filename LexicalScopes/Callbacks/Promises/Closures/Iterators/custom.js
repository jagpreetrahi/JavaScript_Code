function checkIterator(arr)
{
    let  idx = 0;
    function next()
    {
        if(idx == arr.length)
        {
            return undefined;
        }
        const element = arr[idx];
       idx++;
       return element;
    }
    return {next};
}

const fetch = checkIterator([3,5,6,2,5,6,78]);

console.log(fetch.next());
console.log(fetch.next());
console.log(fetch.next());
console.log(fetch.next());
console.log(fetch.next());

