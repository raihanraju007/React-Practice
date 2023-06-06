import React, { useState } from 'react'
import style from './form.module.css';

function Form() {
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const {name, email, password} = user;
    const handleSubmit = (e) => {
        console.log("Form is submitted")
        console.log(user)
        e.preventDefault();
    }

    // const handleChange = (e) => {
    //     const filedName = e.target.name; 
    //     if (filedName === "name") {
    //         setUser({name: e.target.value,email,password});
    //     }else if(filedName === "email"){
    //         setUser({email: e.target.value,name,password});
    //     }else if(filedName === "password"){
    //         setUser({password: e.target.value,name,email});
    //     }
    //   }
    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
      };


  return (
    <div>
      <h1>Registration</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='{style.formGroup}'>
            <label htmlFor='name'>Name : </label>
            <input type='text' name='name' value={name} id='name' onChange={handleChange} required />
        </div>
        <div className='{style.formGroup}'>
            <label htmlFor='email'>Email : </label>
            <input type='email' name='email' value={email} id='email' onChange={handleChange} required />
        </div>
        <div className='{style.formGroup}'>
            <label htmlFor='password'>Password : </label>
            <input type='text' name='password' value={password} id='password' onChange={handleChange} required />
        </div>
        <div className='{style.formGroup}'>
            <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Form
