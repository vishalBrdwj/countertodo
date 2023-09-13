import React, { useState } from 'react'

function Counter() {

const [count, setCount] = useState(0);



  return (
    <div className='d-flex flex-wrap'>
    <div className='col-sm-6 d-flex  mx-auto flex-column  border rounded bg-info p-3 '>
    <h1 className='text-white display-2'>Counter: <span className='text-warning'>{count}</span></h1><br/>
        <button className='btn btn-sm btn-success' onClick={()=> setCount(count+1)}>Increment</button>&nbsp;
        <button className='btn btn-sm btn-primary' onClick={()=> setCount(0)}>Reset</button>&nbsp;
        <button className='btn btn-sm btn-danger' onClick={()=> setCount(count -1)}>Decrement</button>
    </div>
    </div>
  )
}

export default Counter