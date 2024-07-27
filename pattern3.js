function ispattern(n)
{
    for(let i = 0; i<n; i++)
    {
        let str = '';
        for(let j = 0; j<n-i; j++ )
        {
            str += "* ";
        }
        console.log(str);
    }
}

ispattern(5);
ispattern(4);
ispattern(7);