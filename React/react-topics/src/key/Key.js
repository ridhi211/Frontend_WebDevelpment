import React, { useState } from 'react'

const arr = [
    {id: 'a', value: 'Apple'},
    {id: 'b', value: 'Orange'},
    {id: 'c', value: 'Banana'},
    {id: 'd', value: 'Lichie'},
]

function Key() {

    const [arrayList, setArrayList] = useState(arr)

    const deleteItem = (arrayEl) => {
        
        setArrayList( 
            arrayList.filter( (arrayItem) => arrayItem != arrayEl )
        )
    }

    console.log('State var: ', arrayList)

    return (
        <>
            <ul>
            {
            arrayList.map( 
                (arrayEl) => <li key={arrayEl.id}>

                    <label>{arrayEl.value}</label>
                    <input />

                    <button onClick={ () => deleteItem(arrayEl) }>Delete</button>
                </li> 
            )
            }
            </ul>
        </>
    )
}

export default Key
