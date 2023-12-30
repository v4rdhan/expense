import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
// import loginBg from './loginBg.png'
import Input from '../../component/input/Input';

export default function LoginPage() {
  return (
    <div className='main'>

      <div className='width-60 d-flex flex-row justify-content-center align-items-center'>
        <div className='box width-60 d-flex flex-column justify-content-center align-items-center'>
          <div className='title mb-4'>
            <p className='mx-3'>Login</p>
            <p className='mx-3 inActive'>Signin</p>
          </div>
          {/* <div className='labelAction width-100 d-flex flex-column justify-content-center align-items-start mb-5 mt-3'>
            <input type="email" className="formControl" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label htmlFor="exampleInputEmail1" className="formLabel" >Email address</label>
          </div> */}

          <Input type='email' className='formControl width-100' id="exampleInputEmail1" aria-describedby="emailHelp" >Email address</Input>

          {/* <div className='labelAction width-100 d-flex flex-column justify-content-center align-items-start'>
            <input type="password" className="formControl" id="exampleInputPassword1" />
            <label htmlFor="exampleInputPassword1" className="formLabel">Password</label>
          </div> */}

<Input type="password" className="formControl" id="exampleInputPassword1">Password</Input> 

          <div className='width-100 forgotPassword p-2 d-flex justify-content-center align-items-center'>
            <a href="/">Forgot Password</a>
          </div>
          <Link className='button bg-white width-100 p-2 mt-3' to="/home">Login</Link>
          <div className='width-100 forgotPassword register p-2 d-flex justify-content-center align-items-center'>
            {/* <p>Don't have an account?</p> */}
            <a href="/">Register</a>
          </div>
        </div>
      </div>

    </div>
  )
}
