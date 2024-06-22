//The concat() method concatenates (joins) two or more arrays.

// Return Value:
// new array, containing the joined arrays elements

//SYNTAX
/*
array .concat()
array .concat(value1)
array .concat(value1, value2, ..... valueN)
*/


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const k2 = [5, 55, 1992]


const concatRtnVal =  arr1.concat( arr2, k2, "karthi", 5 )

console.log(concatRtnVal)

