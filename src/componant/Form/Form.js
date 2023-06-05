import React, { useState } from 'react'
import style from './form.module.css';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log("Form is submitted")
        let userInfo = {
            name : name,
            email: email,
            password: password
        }
        console.log(userInfo)
        e.preventDefault();
       
    }

  return (
    <div>
      <h1>Registration</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='{style.formGroup}'>
            <label htmlFor='name'>Name : </label>
            <input type='text' name='name' value={name} id='name' onChange={handleNameChange} required />
        </div>
        <div className='{style.formGroup}'>
            <label htmlFor='email'>Email : </label>
            <input type='email' name='email' value={email} id='email' onChange={handleEmailChange} required />
        </div>
        <div className='{style.formGroup}'>
            <label htmlFor='password'>Password : </label>
            <input type='text' name='password' value={password} id='password' onChange={handlePasswordChange} required />
        </div>
        <div className='{style.formGroup}'>
            <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Form
