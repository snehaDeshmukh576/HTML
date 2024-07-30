console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
},2000);

console.log("end");

let startDate= new Date().getTime();
let endDate = startDate;
while(endDate<startDate+1000){
    endDate =new Date().getTime();
}

console.log("while expires");