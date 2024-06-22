
const colors =["red", "blue", "green", "yellow","grey"]

//   static code / hard code
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])

console.log(colors.length)

//---------------------------

//dynamic code
for(let i = 0; i < colors.length; i++ ){
    console.log(colors[i])
}

// looping using map
let x = colors.map(function (el){
    console.log(el)
    return (el + " haii")
})

console.log(x)
//------------------

let numbers = [1, 4, 7, 11, 8, 9]

let sqNum = numbers.map(function (ele, index, array){
    console.log(ele**3, "--", index)
    console.log(array)
    return ele**3
})

console.log(sqNum)



const numberss = [2, 5, 8]; 
const sqrNumbers = numberss. map((num) => num * num); 
console.log(sqrNumbers)
