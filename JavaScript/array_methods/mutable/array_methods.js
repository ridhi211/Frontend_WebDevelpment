// mutable

cars = ["bmw" , "audi", "mini", 1, 2, 11, 3]
cars.push("haii") // adds an element at the last, returns the new length
console.log(cars)

cars.unshift("first") // adds an element at the first, returns the new length
console.log(cars)



colors = ["red","violet", "blue", "pink"]
colors.shift() // removes the first element, returns removed value
console.log(colors)

colors.pop() // removes the last element, returns removed value
console.log(colors)

colors1 = ["red", "violet", "blue", "pink"]
const removed = colors1.splice(0,3,"black")
console.log(colors1)
console.log(removed)

//immutable
let arr = ["jan", "feb", "mar", "april", "may", "june"]
let arr2 = arr.map(function (ele, index){
    console.log(ele)
    return ele
})

console.log(arr2)


