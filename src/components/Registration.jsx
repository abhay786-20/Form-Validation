import React from 'react'
import { styled } from 'styled-components';
import { GlobalStyle } from './Styles/GlobalStyle';
import '../components/Reg.css'
import {useFormik} from 'formik';
import { signUpSchema } from './schemas';

const initialValues = {
    name : "",
    email : "",
    password : "",
    confirm_password :""
};

function Registration() {
 
 const {values,errors,touched,handleBlur,handleChange,handleSubmit} =    useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>{
         console.log(values);
         action.resetForm();
        }
    });
console.log(errors)


  return (
    <>
    <GlobalStyle/>
    <div className="container">
    <div className="modal">
      <div className="modal-container">
        <div className="modal-left">
          <h1 className="modal-title">Registration</h1>
          <p className="modal-desc">
            
          </p>
          <form  onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                type="name"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                
              />
             {errors.name && touched.name ? (<p className='form-errors'>{errors.name}</p>):null }
            </div>
            <div className="input-block">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              
              />
               {errors.email && touched.email ? (<p className='form-errors'>{errors.email}</p>):null }
            </div>
            <div className="input-block">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                
              />
               {errors.password && touched.password ? (<p className='form-errors'>{errors.password}</p>):null }
            </div>
            <div className="input-block">
              <label htmlFor="confirm_password" className="input-label">
                Confirm Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
             {errors.confirm_password && touched.confirm_password ? (<p className='form-errors'>{errors.confirm_password}</p>):null }
            </div>
            <div className="modal-buttons">
              <a href="#" className="">
                Want to register using Gmail?
              </a>
              <button className="input-button" type="submit">
                Registration
              </button>
            </div>
          </form>
          <p className="sign-up">
            Already have an account? <a href="#">Sign In now</a>
          </p>
        </div>

        <div className="modal-right">
          <img
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

</>
);
}

export default Registration