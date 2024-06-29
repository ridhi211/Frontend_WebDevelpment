import React, { useState } from 'react'
import B from './B'

function A() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(5)

    console.log('A comp re-rendered')

    return (
        <>
            <h1>This is A component {count}</h1>

            <button 
                onClick={
                    () => setCount( count + 1 ) 
                }
            >
                Click to Update A comp's state 
            </button>

            <B count2={count2} />
        </>
    )
}

export default A
