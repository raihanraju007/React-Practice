import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';

function Signup() {

const Formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: ''
    },
    onSubmit: (values, {resetForm}) => {
        console.log(values);
        resetForm({values: ""})
    }
})

  return (
    <div>
      <h2>User signup</h2>
      <form onSubmit={Formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name : </label>
            <input type='text' id='name' name='name' value={Formik.values.name} onChange={Formik.handleChange}/>
        </div>
        <div>
            <label htmlFor='email'>Email : </label>
            <input type='text' id='email' name='email' value={Formik.values.email} onChange={Formik.handleChange}/>
        </div>
        <div>
            <label htmlFor='password'>Password : </label>
            <input type='text' id='password' name='password' value={Formik.values.password} onChange={Formik.handleChange}/>
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
