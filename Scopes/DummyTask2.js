//  make a download function for data from url using promises

function downloadData(url){
    return new Promise(function (res , rej){
        console.log("Starting downloading the data from " ,url);
        setTimeout(function exec(){
            const content = 'Jagpreet';
            res(content);
           
        } , 5000)
    })
}

function writingData(data){
    return new Promise(function (res , rej){
        console.log("Starting writing a file with " , data);
        setTimeout(function exec(){
            console.log("Completing writing the data in file");
            const filename = 'file.txt';
            res(filename);
        })
    })
    
}

function upload(value  , url){
    return new Promise(function exec(res ,rej){
        console.log('Uploading the data  in new url ' , url);
        setTimeout(function exec(){
            console.log('Completing the uploading data');
            const response = 'Success';
            res(response);
        })
    })
}

downloadData('www.xyz.com')
.then(function fulfill1(content){
    console.log("Downloaded data is " , content);
    return writingData(content);
} 
)
.then(function writing(value){
    console.log("Starting writing a file with ", value);
    
    return upload(value ,'www.xyz.com');
}
)
.then(function  uploadingData(value ){
    
   console.log('We have upload with ', value);
})
