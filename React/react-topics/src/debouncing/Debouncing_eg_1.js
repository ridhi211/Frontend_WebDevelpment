import React, { useEffect, useState } from 'react'

function Debouncing_eg_1() {

    const [searchInputVal, setSearchInputVal] = useState()

    console.log( searchInputVal)

    
//Karthi

    useEffect( ()=>{

        console.log('useEfefct runs')

        const myTimerFn = setTimeout( ()=>{

            console.log('run this code only after finish typing')
            //API call
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res)=> res.json())
                .then((res)=> console.log(res))

        }, 1000)

        // Cleanup function
        return () => {
            console.log('Cleanup function runs...')

            clearTimeout(myTimerFn)
        } 

    }, [searchInputVal])

    return (
        <div>
            <h1>Debouncing concept</h1>

            <input onChange={ (e) => setSearchInputVal(e.target.value) } />
            
        </div>
    )
}

export default Debouncing_eg_1
