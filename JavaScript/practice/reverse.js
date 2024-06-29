// array.reverse()

const arr = ["bmw", "audi", "benz", "mini", "swift"]
// console.log(arr.reverse())
//---------------------


// array.reverse() using map
const arr1 = [7,6,5,4]
let a = arr1.map(function (ele,index){
    
    return arr1[arr1.length-1 -index ] 
    // arr1[4]
})

// console.log(a)
//---------------------


// array.reverse() using loop

const arr2 = [21,11,54,5]
const revArr =[]

for(let i = arr2.length-1; i >= 0; i--){
    revArr.push((arr2[i]))
}
console.log(revArr)
//--------------------------


// array.reverse() using unshift
const arr3 = ["j", "k", "a", "r"];
const reveArr = []

arr3.map(function (ele){ 
    reveArr.unshift(ele)
})
console.log(reveArr)
//-------------------------


// array.reverse() using reduce
const arr4 = ["jet", "kite", "ant", "roll"];

