console.log("Start");

setTimeout(function cb(){
    console.log("CB setTimeout");
});

fetch("https://api.netflix.com")
.then(function cbf(){
    console.log("CB Netflix");
});

console.log("End");