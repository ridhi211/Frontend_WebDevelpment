/*
DATA TYPES
----------
primitives ( all primitives are called by value )
string, null, boolean, undefined, number, BigInt, symbol

non-primitives - object

*/


// call by value 
let a = 10
let b = a 
b = 5
console.log(a)
console.log(b)
// -----------------

// call by Reference
let c = { a:10 }
let d = c

console.log(c)
console.log(d)

console.log(d.a)

d.a = 5
console.log(d.a)
console.log(c.a)
