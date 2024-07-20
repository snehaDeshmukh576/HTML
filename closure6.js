function X(){
    for(let i=1;i<=5;i++){
   // let i=1;
    setTimeout(function() {
        console.log(i);
    }, i*1000);
}
}
X();