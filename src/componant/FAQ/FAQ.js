import React, { useState } from 'react'
import style from "./faq.module.css"

function FAQ({id, title,description}) {
    const [toggle, setToggle] = useState(false)
  return (
      <article className={style.faq}>
        <div>
            <h4>{title}</h4>
            <button onClick={() => {setToggle(!toggle)}}> 
                {toggle ? '-' : '+'}
            </button>
        </div>
        {toggle && <p>{description}</p>}
      </article>
  )
}

export default FAQ
