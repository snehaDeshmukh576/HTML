function x(){
  var a=7;
function y(){
    var a=7;
    function z(){
        console.log(a);
    }
    z();
}
y();
}
x();