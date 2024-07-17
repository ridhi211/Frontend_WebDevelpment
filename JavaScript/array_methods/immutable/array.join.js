//The join() method returns an array as a string
//Any separator can be specified. The default is comma (,).

// Return Value:
// A string, (with all array elements joined)
// If array.length is 0, the empty string is returned.

//SYNTAX
/*
array .join()
array .join(separator)
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const joinRtnVal =  fruits.join()

console.log(joinRtnVal)
//--------------------------

const joinRtnVal2 =  fruits.join(' -- ')

console.log(joinRtnVal2)
//--------------------------


const matrix = [
    1, 2, 3,
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(matrix.join());
  
  console.log(matrix.join(";"));



