import React, { useReducer } from 'react'
import CounterReducer from './counterReducer'


const Child2=()=>{
    let [state , dispatch]= useReducer(CounterReducer,10)
    console.log(state)
    return(
        
        <div>This is second child
           <h1> Value of Reducer is {state}</h1>

            <button onClick={()=>{
      
        dispatch('INCREMENT')
            }}>
                Increament in Reducer 
            </button>
        </div>
    )
}
export default Child2