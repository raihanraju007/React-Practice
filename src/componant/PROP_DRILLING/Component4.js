import React, { useContext } from 'react'
import { UserContext } from './UserContext'


const Component4 = () => {
  const {user,text} = useContext(UserContext);

  return (
    <div>
      <h3>{user.id}</h3>
      <h3>{user.name}</h3>
      <h3>{text}</h3>
    </div>
  )
}

export default Component4
