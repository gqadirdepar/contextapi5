import React, { useContext } from 'react'
import Countercontext from './countercontext'

const Child=()=>{
    let countervalue= useContext(Countercontext)
    console.log(countervalue)
    return(
        <div>This is first child 
            <h2>This is counter value {countervalue[0]}</h2> 
            <button

onClick={()=>
    {countervalue[1](++countervalue[0])} } >
                Increament contxt value 
            </button> 
       
        </div>
    )
}
export default Child