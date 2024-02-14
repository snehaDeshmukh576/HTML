let arr=[1,2,4,5,7]

arr[0]=5666;
console.log(arr,typeof arr);
console.log(arr.length)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(arr.toString())
console.log(arr.join(" and "))


let num=[1,2,3,4,5]
console.log(num.splice(1,2))
console.log(num.splice(1,3))
console.log(num.splice(1,3,222,333))