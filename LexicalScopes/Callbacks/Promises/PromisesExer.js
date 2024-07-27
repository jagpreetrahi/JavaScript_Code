function download(url)
{
   console.log("Starting downloadeing ",url);
   return new Promise(function f1(resolve, reject){
      setTimeout(function down(){
         console.log("Downloading  Successfully");
         const data = "dummy";
         resolve(data);
        }, 6000);

    }) 
}

function write(data)
{
    console.log("write the data in a file " , data);
    return  new Promise(function f2(resolve , reject){
        setTimeout(function wr(){
            console.log("Writing Successfully");
            const  fileName = "File.txt";
            resolve(fileName);
        }, 5000);
        
    })
}

function UploadData(url , file)
{
    console.log("Starting Uploading" , file, "on", url);
    return new Promise(function f3(resolve , reject){
        setTimeout(function up(){
            console.log("Uploaded successfully");
            const response = "Success";
            resolve(response);
        }, 4000);
       
    })
}
const x = download("www.com") ;
x
.then(function fh(value){
    console.log("Your download data is" , value);
    return write(value);
})


.then(function fh2(value){
    console.log("Filename is ",
       value 
    );
    return UploadData(value);
})

.then(function fh3(value){
    console.log("Response is ",
       value 
    )
})


