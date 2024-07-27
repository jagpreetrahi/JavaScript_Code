function download(url , fn)
{
    console.log("Starting downloading data from  this" , url);
  
    setTimeout(function exec(){
        console.log("Downloading Successfully");
        const data = "dummy data";
        fn(data);
        
    }, 500);
    
}

function Savedownload(data, fn){
    console.log("Saving the data with" , data);
     
    setTimeout(function exec1(){
        console.log("SuccessFully");
        const fileName = "File.txt";
        
      
        fn(fileName);
    } ,1000);
    

    
}

function UploadData(url , file , fn){
    console.log("Starting uploading " , file , "on", url);
   
    setTimeout(function exec4(){
        console.log("Uploaded completed");
        const final = "Successfully ";
        
       fn(final);
    }, 2000)

}


download("http:/ www.com" , function exec2(data){
    console.log("Your download data is " , data);
    // initialize for checking the data is download 100 % or not
   

    if(true){
        // calling the savedownloaded function
        Savedownload("ABCDE" ,function exec3(fileName){
            console.log("Filename is ", fileName );
           

            if(true){
                UploadData("www.upload.com", fileName ,function exec(final){
                    console.log("Your Uploaded data is " , final);
   
               })
            }
           

            
        });

    }
})








    

