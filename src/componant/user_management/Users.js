import React, { useContext } from 'react';
import User from "./User";
import { UsersContext } from '../context/UsersContext';

const Users = ({ handleDeleteUser }) => {
  const { users, setUsers } = useContext(UsersContext);
  return (
    <div>
      <section className='users'>
        {users.map(user => <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />)}
      </section>
    </div>
  );
}

export default Users;
