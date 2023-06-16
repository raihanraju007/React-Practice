import React, { useState } from 'react'
import User from './User'


const Users = () => {
    const [userName, setUserName] = useState("Md Raihan Hossin");
    const [userId, setUserId] = useState();
  return (
    <>
         <User userName={userName} userId={userId} />
    </>
  )
}

export default Users
