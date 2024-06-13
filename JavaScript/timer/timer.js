console.log("One")
console.log("two")

let a = 0;

//Asynchronous code
let clrInterval = setInterval( function (){
    
    console.log(a)
    console.log("three")
    a = a + 1;

}, 500 )

document.getElementById('clr')
    .addEventListener('click', function (){
        // Clear the interval running
        clearInterval(clrInterval)

    })


console.log("four")