/*
function* generator(){
    console.log("Inside the generators");
    yield 1;
    yield 9;
    console.log("ended ");
    yield 3;
    yield 4;
        
}

let x = generator();
console.log("1st" , x.next());
console.log("2nd" , x.next());
console.log("3rd" , x.next());
console.log("4st" , x.next());
*/


/*
function* infiniteEvenNumbers() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}

const evens = infiniteEvenNumbers();
for (let i = 0; i < 10; i++) {
    console.log(evens.next().value);
}
  
*/


function* checkElement()
{
    console.log("starting")
    let y = 0;
    console.log(yield 1);
    console.log("resume the code");
    y = 10 + (yield 20);
    console.log("value of y" , y);
}

const iter = checkElement();
console.log("called generator");
console.log("first value" ,iter.next());
console.log("Second value" ,iter.next());
console.log("Third value" ,iter.next(12));
