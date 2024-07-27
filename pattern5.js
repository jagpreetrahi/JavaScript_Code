let n = 7;
for(let i = 0; i<n; i++)
{
    let str = ' ';
    for(let j = 0; j<(n+1)/2; j++)
    {
       if(j == i)
       {
        str = " ";
       }
       else{
        str += "* ";
       }
       
    }
    
    console.log(str);  
}