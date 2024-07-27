function upper(n)
{
    for(let i = 0; i < (n+1)/2; i++)
    {
        let str = ' ';
        let leftstr = i;
        for(let j = 0; j<leftstr; j++)
        {
            str += "* ";
        }

        let spaces = n - 2*i;
        for(let j = 0 ; j<spaces; j++)
        {
            str += "  ";
        }

        let rightstr = i;
        for(let k =0; k<rightstr; k++)
        {
            str += "* ";
        }
        console.log(str);
    }
}
function middle(n)
{
    let str = ' ';
    
    for(i = 0; i<n; i++)
    {
        str += "* ";
       
       
        
       
    }
    console.log(str);
    
}
function lower(n)
{
    for(let i = 0; i<(n+1)/2; i++)
    {
        let str = ' ';
        let leftstr = ((n+1)/2)-i-1
        for(let j = 0; j < leftstr ; j++)
        {
             str += "* ";
        }
        

        let spaces = 2*i + 1;
        for(let j = 0; j < spaces; j++)
        {
            str += "  ";
        }
       

        let rightstr = ((n+1)/2)-i-1;
        for(let k = 0; k<rightstr; k++)
        {
            str += "* ";
        }

        console.log(str);
    }

}

function pattern(n)
{
    upper(n);
    middle(n);
    lower(n);
}

pattern(7);

