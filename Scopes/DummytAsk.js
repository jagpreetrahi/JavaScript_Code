//  download the data from url

function downloadData(url , data){
    console.log("Starting download data from " , url);
    data();
    
}


downloadData("www.xyz.com" , function data(){
   
    setTimeout(function exec() {
      const  data = "ABcde";
        console.log("Download data is ",data);
        
    } ,1000)

    saveData("www.xyz.com" , function save(content){
        console.log("Saving data is " , content);
    })
})


// to save the data in file

function saveData( save) {
    setTimeout(function exec(){
    console.log("Saving data completed");
    const content = "ABcde";
    save(content);
    } , 2000);
}


// upload the file 

 



