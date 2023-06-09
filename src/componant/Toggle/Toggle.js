import React, { useState } from 'react'

function Toggle() {
    const [Toggle, setToggle] = useState(true);
  return (
    <div style={{margin: "1rem", backgroundColor: "pink", padding: "1rem"}}>
     {Toggle && (
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. </p>
     )}
        <div style={{textAlign: "center"}}>
        <button onClick={()=>{setToggle(!Toggle)}}>{Toggle ? "Hide" : "Show"}</button>
        </div>
    </div>
  )
}

export default Toggle
