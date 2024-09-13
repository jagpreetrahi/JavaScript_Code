function checkPatient(nums_id){
    return new Promise(function execute(resolve , reject){
        let patientDetails = {name : 'Mark' , Age: 32 , disease: 'cough'};
        console.log("Welcome to the Hospital");
      
        setTimeout(() => {
           if(nums_id %2 == 0){
              resolve(patientDetails);
           }
           else{
             reject('This is invalid number id ');
           }

        } , 1000)
        console.log("Show me your details");
        
    })
   
}

let y = checkPatient(10);

