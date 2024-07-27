function isprime(x , y)
{
   for(let i = 2; i<x-1; i++)
   {
      if(x % i != 0 || y % i != 0)
      {
        return "prime";
      }
      else{
        return "NotPrime";
      }
   }
}





console.log(isprime(12 ,11));