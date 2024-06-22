//Array.find()

//SYNTAX
//Array .find( callbackFn )

// function (e) { <<conditional statement>> }

const ages = [3, 10, 18, 20];

const findRtn = ages.find( function (el) { return el > 10 } )

console.log(findRtn)