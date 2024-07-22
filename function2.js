function a(){
    console.log("a called");
}

 
var b=function (){
    console.log("b called");
}


var c= function xyz() {
    console.log(xyz);
}
a();
b();
c();
//xyz();--- itv will give uncaught reference  error