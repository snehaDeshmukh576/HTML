let a=[193,5,6,88]

for(let index=0;index<a.length;index++){
    const element =a[index];
    console.log(element)
}

a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

