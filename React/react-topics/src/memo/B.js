import React, {memo} from 'react'
import C from './C'


function B({count2}) {

    console.log('B comp re-rendered')
    
    return (
        <>
            <h1>This is B component {count2}</h1>

            <C />
        </>
    )
}


export default memo(B)
