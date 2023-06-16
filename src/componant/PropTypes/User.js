import React, { useId } from 'react'
import PropsTypes from "prop-types"

const User = (props) => {
  return (
    <div>
      <h1>{props.userName}</h1>
      <h3>{props.userId}</h3>
    </div>
  )
}
User.PropsTypes = {
    userName : PropsTypes.string,
    userId : PropsTypes.number
}
User.defaultProps = {
    userName: "default name",
    useId: 0,
}

export default User
