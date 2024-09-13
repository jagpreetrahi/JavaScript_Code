function printString(value){
    return new Promise(function exec(res , rej){
        console.log("Starting to concentate the string ");
        let string1 = "singh";
        setTimeout(function  exec(){
            console.log("Enter in the timer zone");
            string1 += value;
            res(string1);
            if(string1 ==  '\O'){
                rej(value);
            }
        } , 5000);
    } )
}

let x = printString("Jagpreet");
x.
then(function fulfillhandler(string1){
    console.log("The value of string is" , string1);
    return "String  is Jagpreet";
}, 
function rejecthandler(value){
    console.log("Value is rejected by string" , value);
    return "New string would not be any value";
})
.then(function fulfillhandler2(value1){
    console.log("New string come here as" , value1 );
} ,
function rejecthandler2(value1){
    console.log("Here is no space for string" , value1);
}
)