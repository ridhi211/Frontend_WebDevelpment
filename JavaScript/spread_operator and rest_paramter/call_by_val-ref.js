let a = 2
let b = a
console.log(a)
console.log(b)


b = 5
console.log(a)
console.log(b)
//call by value
//----------------

let x = ["k", "j", "l"]
let y = x
console.log(x)
console.log(y)

console.log(y[1])

y[1] = "o"
console.log(y[1])
console.log(x)
console.log(y)
//objects are call by reference
//----------------

// shallow copy with spread operator
let u = ["k", "j", "l"]
let v = [...u]
console.log(u)
console.log(v)

u[1] = "haii"

v[1] = "o"
console.log(v[1])
console.log(u)
console.log(v)