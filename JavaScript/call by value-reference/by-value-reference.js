/*
DATA TYPES
----------
primitives ( all primitives are called by value )
string, null, boolean, undefined, number, BigInt, symbol

non-primitives - object

*/


// call by value - same value but 2 diff memory location
let a = 10
let b = a 
b = 5
console.log(a)
console.log(b)
// -----------------

// call by Reference - shows only the reference
let c = { a:10 }
let d = c

console.log(c)
console.log(d)

console.log(d.a)

d.a = 5
console.log(d.a)
console.log(c.a)

let arr1 = ["e", "f",  "g", "h" ]
let arr2 = arr1
arr2[0] = "z"
console.log(arr2)
console.log(arr1)

