import React from 'react';
import User from "./User";

const users = ({users}) => {
  return (
    <div>
      <section>
        {users.map(user => <User key={user.id} user={user} />)}
      </section>
    </div>
  )
}

export default users
