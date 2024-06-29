import React, { useEffect, useMemo, useState } from 'react'

function A() {

    const [userData, setUserData] = useState([])
    const [count, setCount] = useState(0)

    const fn1 = function () {
        return userData.map( (el) => { return el.name.toUpperCase()  } )
    }

    const memoizedFnResult = useMemo( () => { return fn1() }, [userData] )

    useEffect( ()=> {

        async function asyncFn() {
            const fetchResult =  await fetch('https://jsonplaceholder.typicode.com/users')
            
            const jsonParsedResult = await fetchResult.json()

            setUserData(jsonParsedResult)
            
        }
        asyncFn()
        

    }, [] )

    console.log(memoizedFnResult)

    return (
        <>
            <h1>This is A component in useMemo</h1>
            

            {
                memoizedFnResult.map( (element, i) => <p key={i}>{element}</p>)
            }

            <button onClick={() => setCount(count+1)}>Click to update count state</button>
        </>
    )
}

export default A
