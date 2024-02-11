console.log("lets learn about for loops in js")
let a=1;
/* 
console.log(a)
console.log(a+1)
console.log(a+2)
*/
/*
for(let i=0;i<100;i++){
    console.log(a+i)
}
*/
let obj={
    name:"Harry",
    role:"Programmer",
    company:"xyz AI"
}

for(const key in obj){
    console.log(key)
}


for(const key in obj){
    const element=obj[key];
    console.log(key,element)
}


for(const c of"Harry"){
    console.log(c)
}


for(const c of "company"){
    console.log(c)
}
