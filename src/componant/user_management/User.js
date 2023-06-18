import React from 'react'

const user = ({user}) => {
  const {id, username} = user;
    return (
    <article>
        <h2>{id}</h2>
        <p>{username}</p>
    </article>
  )
}

export default user
