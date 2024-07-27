function upperTriangle(n){
    for(let i = 0; i<n; i++)
    {
        let str = ' ';
        for(let j = 0; j<n-i+1; j++)
        {
            str += "  " ;
        }
        for(let j = 0; j<2*i+1; j++)
        {
            str += "* ";
        }
        console.log(str);
    }    
}
 function lowerTriangle(n)
 {
    for(let i = 0; i<n; i++)
    {
         let str = '  ';
        for(let j = 0; j<=i; j++)
        {
            str += "  ";
        }
        for(let k = 0; k<2*(n-i)-1; k++)
        {
            str += "* ";
        }
        console.log(str);
    }
   
 }

 function pattern(n)
 {
    upperTriangle(n);
    lowerTriangle(n);
 }

 pattern(5);

    
