async function b(){
    let a = await fetch('https://jsonplaceholder.typicode.com/users')
    
    let c = await a.json()

    console.log(c)
}

b()


// how to get a return value in a variable
// function user(){
//     return 5;
// }
// let b = user()
// console.log(b)

