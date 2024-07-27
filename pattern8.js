function leftPattern(n){
    for(let i = 0; i<n ; i++)
    {
        let spaces = ' ';
        for(let j = 0; j <n-i-1 ; j++)
        {
            
            spaces += " ";
        }
        
    
        let count = 1;
        for(let j = 0; j<i+1; j++)
        {
             spaces += count;
             count++;
        }

      let counter2 = i ;
      for(let k = 0; k <i ;  k++)
      {
        spaces += counter2;
        counter2--;
      }
        console.log(spaces );
    }
}


 


leftPattern(5);



