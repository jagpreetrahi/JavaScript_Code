function pattern(n)
{
    
    for(let i = 0; i<n ; i++)
    {
        //  concatenate the star  for grid
        let str = '';
        for(let j = 0; j<n; j++)
        {
            str += "* "; 
           
        }
        console.log(str);
       
       
    }
}


pattern(6);
pattern(10);
pattern(4);
pattern(5);
