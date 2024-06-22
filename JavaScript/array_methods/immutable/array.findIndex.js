//Array.findIndex()

//SYNTAX
//Array .findIndex( callbackFn )

// function (e) { <<conditional statement>> }

const ages = [3, 10, 18, 20];

const findIndRtn = ages.findIndex( function (el) { return el > 10 } )

console.log(findIndRtn)