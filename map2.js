const arr=[5,1,3,2,6];

function binary(x){
    return x.toString(2);
}

const output= arr.map(binary);

console.log(output);