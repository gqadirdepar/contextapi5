import React, { useContext } from 'react'
import Countercontext from './countercontext'

const Child=()=>{
    let countervalue= useContext(Countercontext)
    console.log(countervalue)
    return(
        <div>This is first child 
        <h2>This is counter value {countervalue}</h2> </div>
    )
}
export default Child