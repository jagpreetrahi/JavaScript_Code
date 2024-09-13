console.log("Put a head down");
let arr = [2,3,5,7,8,1];
for(let  i = 0; i<5; i++){
    setTimeout(() => {
        arr.sort(function comp(a,b){
            return a-b;
        })
    } ,1000);
    
}


console.log("It's time to sit and think about the purpose and goals of a life");
 var y = setInterval(function exec() {console.log('Hii') , 500});
 clearInterval(y);
y = null;
console.log(y);

