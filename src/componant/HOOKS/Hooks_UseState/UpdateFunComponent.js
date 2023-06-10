import React, { useState } from 'react'

function UpdateFunComponent() {
    const [count, setCount] = useState(0);

    const handleUpdate = () =>{
        setCount(count + 1);
        setCount(count => count + 1);
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleUpdate}>+</button>
    </div>
  )
}

export default UpdateFunComponent
