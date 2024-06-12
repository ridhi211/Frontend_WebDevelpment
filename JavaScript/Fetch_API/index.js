
console.log(
    fetch('https://jsonplaceholder.typicode.com/users')
)


fetch('https://jsonplaceholder.typicode.com/users')
    .then( function (a){
        console.log('This is the first then method: ', a)
        return a.json();
    })
    .then( function (a) {
        console.log('This is the second', a)

        console.log('name: ', a[0].name )
    })


