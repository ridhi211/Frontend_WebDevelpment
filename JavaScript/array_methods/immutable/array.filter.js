// array.filter()
// filter call back syntax
// array.filter( function (ele, index, array) { return <<boolean>> } )

const marks = [60, 31, 77, 88, 32]
const total = marks.filter( function ( ele ) { return ele > 35 })
console.log(total)




















// what is callback function
// a function which is passed inside another function call as argument


// function a(){

// }
// a((function (){}))