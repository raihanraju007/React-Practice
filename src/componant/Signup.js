import React, { useState } from 'react'
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';

function Signup() {

const Formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: ''
    },
    validationSchema: yup.object({
        name: yup.string().min(2, "Name must have at least 2 characters").required(),
        email: yup.string().email().required(),
        password: yup.string().min(6,"Password have at least 6 characters").required() ,
    }),
    onSubmit: (values, {resetForm}) => {
        console.log(values);
        resetForm({values: ""})
    }
})
// console.error(Formik.errors);

  return (
    <div>
      <h2>User signup</h2>
      <form onSubmit={Formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name : </label>
            <input type='text' id='name' name='name' value={Formik.values.name} onChange={Formik.handleChange}/>
            <br/>
            {Formik.touched.name && Formik.errors.name && <span style={{color:'red'}}>{Formik.errors.name}</span>}
        </div>
        <div>
            <label htmlFor='email'>Email : </label>
            <input type='text' id='email' name='email' value={Formik.values.email} onChange={Formik.handleChange}/>
            <br/>
            {Formik.touched.email && Formik.errors.email && <span style={{color:'red'}}>{Formik.errors.email}</span>}
        </div>
        <div>
            <label htmlFor='password'>Password : </label>
            <input type='text' id='password' name='password' value={Formik.values.password} onChange={Formik.handleChange}/>
            <br/>
            {Formik.touched.password && Formik.errors.password && <span style={{color:'red'}}>{Formik.errors.password}</span>}
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
