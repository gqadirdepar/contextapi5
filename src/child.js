import React, { useContext } from 'react'
import Countercontext from './countercontext'

const Child=()=>{
    let countervalue= useContext(Countercontext)
    console.log(countervalue)
    return(
        <div>This is first child </div>
    )
}
export default Child